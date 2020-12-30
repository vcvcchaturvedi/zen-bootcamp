let goHome=function(){
    window.location.href='index.html';
}
let createDOMElements=function(){
let maindiv=document.createElement('div');
maindiv.classList.add('container', 'jumbotron', 'd-flex', 'align-items-center','background2');
let maindivrow=document.createElement('div');
maindivrow.classList.add('row', 'mx-auto', 'p-4');
let div1=document.createElement('div');
div1.classList.add('col-12', 'text-center', 'mt-4', 'p-4');
let div1h1=document.createElement('h1');
div1h1.classList.add('text-center', 'd-inline-block');
div1h1.innerText='High Scores';
div1.appendChild(div1h1);
let div2=document.createElement('div');
div2.classList.add('col-12', 'text-center', 'mt-4', 'p-4');
let div2h1=document.createElement('h1');
div2h1.setAttribute('id','highScores');
div2h1.classList.add('overflow-auto', 'highScores');
div2h1.innerText='Loading High Scores Data...';
div2.appendChild(div2h1);
let div3=document.createElement('div');
div3.classList.add('col-12', 'text-center', 'mt-4', 'p-4');
let div3button=document.createElement('button');
div3button.classList.add('btn', 'btn-primary');
div3button.setAttribute('id','goHome');
div3button.innerText='Go Home';
div3button.onclick=goHome;
div3.appendChild(div3button);
maindivrow.append(div1,div2,div3);
maindiv.appendChild(maindivrow);
document.body.appendChild(maindiv);
};
createDOMElements();
let uri='https://5fec5eeb573752001730b68d.mockapi.io/highScores';
let fetched=false;
let highScoresData;
let sortDescending=function(data){
    let scores=[];
    let userNameIndices=[];
    data.forEach(function(scoreData){
        let score=scoreData.highScore;
        let username=scoreData.username;
        scores.push(score);
        userNameIndices.push(username);
    });
    
    for(let i=0;i<scores.length;i++)
    {
        let max=scores[i];
        let pos=i;
        for(let j=i+1;j<scores.length;j++)
        {
            if(scores[j]>max)
            {
                let temp=max;
                max=scores[j];
                pos=j;
            }
        }
        let tempScore=scores[i];
        scores[i]=max;
        scores[pos]=tempScore;
        let tempUserName=userNameIndices[i];
        userNameIndices[i]=userNameIndices[pos];
        userNameIndices[pos]=tempUserName;

    }
    let sortedData=[];
    scores.forEach((score,index)=>{
        let scoreData={
            username: userNameIndices[index],
            highScore: score
        };
        sortedData.push(scoreData);
    });
    return sortedData;
}
let getHighScores=async function () {
    try{
        
        let highScores=await fetch(uri);
        highScoresData=await highScores.json();
        fetched=true;
        let highScoresTag=document.getElementById('highScores');
        let str="";
        highScoresData=sortDescending(highScoresData);
        highScoresData.forEach(highScoreData=>{
            str+=highScoreData.username+"  -  "+highScoreData.highScore+'\n';
        });
        highScoresTag.innerText=str;
        }catch(err){console.log(err);}
}
getHighScores();