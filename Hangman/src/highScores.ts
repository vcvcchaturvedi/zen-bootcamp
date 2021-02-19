import 'regenerator-runtime/runtime'
let makeDOM=function(){
let outerDiv=document.createElement('div');
outerDiv.classList.add('outer');
let div1=document.createElement('div');
div1.classList.add('top', 'center');
let div1b=document.createElement('b');
div1b.innerText='HANGMAN - High Scores';
div1.appendChild(div1b);
let div2=document.createElement('div');
div2.classList.add('inner2', 'center');
let div2table=document.createElement('table');
div2table.classList.add('center', 'innerTable');
let div2tablebody=document.createElement('tbody');
div2tablebody.classList.add('center');
div2tablebody.setAttribute('id','innerTable');
div2table.appendChild(div2tablebody);
div2.appendChild(div2table);
let div3=document.createElement('div');
div3.classList.add('inner2','center');
let div3button=document.createElement('button');
div3button.classList.add('playButton');
div3button.setAttribute('id','gohome');
div3button.innerText="Go Home";
div3.appendChild(div3button);
outerDiv.append(div1,div2,div3);
document.body.appendChild(outerDiv);
};
makeDOM();
let gohome: HTMLButtonElement=<HTMLButtonElement>document.getElementById('gohome');
gohome.onclick=()=>{window.location.href='index.html'};
let highScoresData=async function(){let highs= await fetch('https://5fec5eeb573752001730b68d.mockapi.io/Hangman');
let highScores=await highs.json();
for(let i=0;i<highScores.length;i++)
{
    let max=highScores[i].highscore;
    let pos=i;
    for(let j=i+1;j<highScores.length;j++)
    {
        if(highScores[j].highscore>max)
        {
            max=highScores[j].highscore;
            pos=j;
        }
    }
    let tempHS=highScores[i].highscore;
    let tempUN=highScores[i].username;
    highScores[i].username=highScores[pos].username;
    highScores[i].highscore=max;
    highScores[pos].username=tempUN;
    highScores[pos].highscore=tempHS;
}

let tbody: HTMLDivElement=<HTMLDivElement>document.getElementById('innerTable');
let trHeader=document.createElement('tr');
trHeader.classList.add('trHeader');
let t1d=document.createElement('td');
let t2d=document.createElement('td');
t1d.innerText="User-Name";
t2d.innerText="High Score";
trHeader.append(t1d,t2d);
tbody.appendChild(trHeader);
highScores.forEach((score: any)=>{
let tr=document.createElement('tr');
let td1=document.createElement('td');
let td2=document.createElement('td');
td1.innerText=score.username;
td2.innerText=score.highscore;
tr.append(td1,td2);
tbody.appendChild(tr);
});
};
highScoresData();


