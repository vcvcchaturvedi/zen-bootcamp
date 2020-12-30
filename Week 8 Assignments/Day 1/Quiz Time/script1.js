let createDomElements=function(){
let audioElement=document.createElement('audio');
audioElement.setAttribute('id','intro_audio');
audioElement.src='intro.mp3';
let maindiv=document.createElement('div');
maindiv.classList.add('container', 'jumbotron', 'd-flex', 'align-items-center');
let maindivrow=document.createElement('div');
maindivrow.classList.add('row', 'mx-auto');
let div1=document.createElement('div');
div1.classList.add('col-12', 'text-center');
let div1h1=document.createElement('h1');
div1h1.innerText='Quick Quiz';
div1.appendChild(div1h1);
let div2=document.createElement('div');
div2.classList.add('col-12', 'text-center');
let div2button=document.createElement('button');
div2button.classList.add('btn', 'btn-primary', 'button');
div2button.setAttribute('id','play');
div2button.innerText='Play Now';
div2.appendChild(div2button);
let div3=document.createElement('div');
div3.classList.add('col-12', 'text-center');
let div3button=document.createElement('button');
div3button.classList.add('btn', 'btn-primary', 'button');
div3button.setAttribute('id','highScores');
div3button.innerText='High Scores';
div3.appendChild(div3button);
let div4=document.createElement('div');
div4.classList.add('col-12', 'text-center', 'd-none', 'mt-4');
let div4div=document.createElement('div');
div4div.classList.add('h1', 'loading');
div4.setAttribute('id','loading');
div4div.innerText='Loading game now...';
div4.appendChild(div4div);
maindivrow.append(div1,div2,div3,div4);
maindiv.appendChild(maindivrow);
document.body.append(audioElement,maindiv);
};
createDomElements();



let error=false;
let fetched=false;
localStorage.clear();
let playButton=document.getElementById('play');
let audioElement=document.getElementById('intro_audio');
let highScoresButton=document.getElementById('highScores');
highScoresButton.onclick=function(){
    window.location.href='highscores.html';
}
async function getQuestions(){
    try{
    let response=await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
    let responseText= await response.text();
    localStorage.setItem('questionSet',responseText);
    }catch(err){error=true;throw err;}
}

audioElement.volume=0.1;
playButton.onclick=function(){audioElement.play();
    let loadingElement=document.getElementById('loading');
    loadingElement.classList.remove('d-none');
    playButton.blur();
    setInterval(function(){
        if(playButton.classList.contains('buttonAnimated'))
            {
                playButton.classList.remove('buttonAnimated');
            }
            else
            {
                playButton.classList.add('buttonAnimated');
            }
        },400);
        try{
        getQuestions();
        fetched=true;
        }catch(err){alert("Error getting the question set, please check your internet connection.");window.location.reload();}

};
highScoresButton.onclick=function(){
window.location.href='highscores.html';
};
audioElement.onended=function(){if(!error && fetched)window.location.href='game.html';};

