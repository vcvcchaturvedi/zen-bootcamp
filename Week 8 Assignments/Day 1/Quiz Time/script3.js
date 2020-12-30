let playAgain=function(){
    window.location.href='game.html';
}
let goHome=function(){
    window.location.href='index.html';
}
let saveScore=function(){
    let currentUserName=document.getElementById('username').value;
if(fetched)
{
    let found=false;
highScoresData.forEach(highScoreData => {
    if(highScoreData.username==currentUserName)
    {
        found=true;
    if(highScoreData.highScore<userscore)
    {
        let updateStatus=updateData(highScoreData.id);
        if(updateStatus)
        {
        alert('Saved High Score!');
        fetched=false;
        getHighScores();
        }
        else
        alert('Some error happened while saving high score..');
    }
    else{
        alert('You already have a high score which is equal to or higher than your current score!');
    }
}
});
if(!found)
{
    let insertHighScoreStatus=insertData(currentUserName,userscore);
    if(insertHighScoreStatus)
    {
    alert('Saved High Score!');
    fetched=false;
    getHighScores();
    }
    else
    alert('Some error happened while saving high score..');
}
}
};
let userNameTextChanged=function(){
    let saveButton=document.getElementById('saveScoreBtn');
    let userName=document.getElementById('username');
if(userName.value.length>0)
saveButton.disabled=false;
else
saveButton.disabled=true;
};

let createDOMElements=function(){
let maindiv=document.createElement('div');
maindiv.classList.add('container', 'jumbotron', 'd-flex', 'align-items-center');
let maindivrow=document.createElement('div');
maindivrow.classList.add('row', 'mx-auto', 'p-4');
let div1=document.createElement('div');
div1.classList.add('col-12', 'text-center', 'mt-4', 'p-4');
let div1h1a=document.createElement('h1');
div1h1a.classList.add('text-center', 'd-inline-block');
div1h1a.innerText='Your Score';
let div1h1b=document.createElement('h1');
div1h1b.classList.add('text-center');
div1h1b.setAttribute('id','score');
div1.append(div1h1a,div1h1b);
let div2=document.createElement('div');
div2.classList.add('col-8', 'offset-4', 'text-center', 'mt-4', 'p-4');
let div2input=document.createElement('input');
div2input.classList.add('form-control', 'input', 'text-center');
div2input.setAttribute('id','username');
div2input.setAttribute('type','text');
div2input.setAttribute('placeholder','username');
div2input.onkeyup=userNameTextChanged;
div2.appendChild(div2input);
let div3=document.createElement('div');
div3.classList.add('col-12', 'text-center', 'mt-4', 'p-4');
let div3button=document.createElement('button');
div3button.classList.add('btn', 'btn-primary');
div3button.setAttribute('id','saveScoreBtn');
div3button.disabled=true;
div3button.innerText='Save';
div3button.onclick=saveScore;
div3.appendChild(div3button);
let div4=document.createElement('div');
div4.classList.add('col-12', 'text-center', 'mt-4', 'p-4');
let div4button=document.createElement('button');
div4button.classList.add('btn', 'btn-primary');
div4button.innerText='Play Again';
div4button.setAttribute('id','playAgain');
div4button.onclick=playAgain;
div4.appendChild(div4button);
let div5=document.createElement('div');
div5.classList.add('col-12', 'text-center', 'mt-4', 'p-4');
let div5button=document.createElement('button');
div5button.classList.add('btn', 'btn-primary');
div5button.setAttribute('id','goHome');
div5button.innerText='Go Home';
div5button.onclick=goHome;
div5.appendChild(div5button);
maindivrow.append(div1,div2,div3,div4,div5);
maindiv.appendChild(maindivrow);
document.body.appendChild(maindiv);
};

createDOMElements();

let fetched=false;
let userscore=localStorage.getItem('userScore');
let score=document.getElementById('score');
score.innerText=userscore;


let uri='https://5fec5eeb573752001730b68d.mockapi.io/highScores';
let insertData=async function(userName,userscore){
    let data = {
        username: userName,
        highScore: userscore
      };
      try{
      let responseInsert=await fetch(uri, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      let responseInsertData=await responseInsert.json();
      //alert(responseInsertData);
      if(responseInsertData.length==1)
      return true;
    }catch(err){alert(err);return false;}
};
let updateData=async function(id){
        let data = {
          highScore: userscore
        };
        try{
        let responseUpdate=await fetch(uri + "/"+id, {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
          let responseUpdateData=await responseUpdate.json();
          //alert(responseUpdateData);
          if(responseUpdateData.length==1)
          return true;
    }catch(err){
        alert(err);
        return false;
    }
};
let highScoresData;
let getHighScores=async function () {
    try{
        
        let highScores=await fetch(uri);
        highScoresData=await highScores.json();
        fetched=true;
        }catch(err){console.log(err);}
}
getHighScores();
