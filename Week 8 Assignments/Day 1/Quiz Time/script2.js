let chooseA=function(){
    if(lockedChoice)
    return;
    lockedChoice=true;
    let divA=document.getElementById('divA');
    divA.classList.add('lock');
    
    lockOptionAudio.onended=function(){
    if(correctAnswerIndex==0)
    {
    divA.classList.remove('lock');
    divA.classList.add('correct'); 
    correctAnswerAudio.onended=proceed;
    correctAnswerAudio.play();
    userScore+=10;
    }
    else{
        divA.classList.remove('lock');
        divA.classList.add('wrong'); 
        wrongAnswerAudio.onended=proceed;
        wrongAnswerAudio.play();
    }
    
    };
    lockOptionAudio.play();
};
let chooseB=function(){
    if(lockedChoice)
    return;
    lockedChoice=true;
    let divB=document.getElementById('divB');
    divB.classList.add('lock');
    
    lockOptionAudio.onended=function(){
    if(correctAnswerIndex==1)
    {
    divB.classList.remove('lock');
    divB.classList.add('correct'); 
    correctAnswerAudio.onended=proceed;
    correctAnswerAudio.play();
    userScore+=10;
    }
    else{
        divB.classList.remove('lock');
        divB.classList.add('wrong'); 
        wrongAnswerAudio.onended=proceed;
        wrongAnswerAudio.play();
        
    }
    
    };
    lockOptionAudio.play();
};
let chooseC=function(){
    if(lockedChoice)
    return;
    lockedChoice=true;
    let divC=document.getElementById('divC');
    divC.classList.add('lock');
    
    lockOptionAudio.onended=function(){
    if(correctAnswerIndex==2)
    {
    divC.classList.remove('lock');
    divC.classList.add('correct');
    correctAnswerAudio.onended=proceed; 
    correctAnswerAudio.play();
    userScore+=10;
    }
    else{
        divC.classList.remove('lock');
        divC.classList.add('wrong'); 
        wrongAnswerAudio.onended=proceed;
        wrongAnswerAudio.play();
    }
    
    };
    lockOptionAudio.play();
};
let chooseD=function(){
    if(lockedChoice)
    return;
    lockedChoice=true;
    let divD=document.getElementById('divD');
    divD.classList.add('lock');
    
    lockOptionAudio.onended=function(){
    if(correctAnswerIndex==3)
    {
    divD.classList.remove('lock');
    divD.classList.add('correct'); 
    correctAnswerAudio.onended=proceed;
    correctAnswerAudio.play();
    userScore+=10;
    }
    else{
        divD.classList.remove('lock');
        divD.classList.add('wrong'); 
        wrongAnswerAudio.onended=proceed;
        wrongAnswerAudio.play();  
    }
    
    };
    lockOptionAudio.play();
};
let createDOMElements=function(){
let loadQuestionAudio=document.createElement('audio');
loadQuestionAudio.src='questionLoad.mp3';
loadQuestionAudio.setAttribute('id','loadQuestion_audio');
loadQuestionAudio.volume=0.1;
let lockOptionAudio=document.createElement('audio');
lockOptionAudio.src='lock.mp3';
lockOptionAudio.setAttribute('id','lockOption_audio');
lockOptionAudio.volume=0.1;
let correctAnswerAudio=document.createElement('audio');
correctAnswerAudio.src='correctAnswer.mp3';
correctAnswerAudio.setAttribute('id','correctAnswer_audio');
correctAnswerAudio.volume=0.1;
let wrongAnswerAudio=document.createElement('audio');
wrongAnswerAudio.src='wrongAnswer.mp3';
wrongAnswerAudio.setAttribute('id','wrongAnswer_audio');
wrongAnswerAudio.volume=0.1;
let maindiv=document.createElement('div');
maindiv.classList.add('container', 'align-items-center');
let maindivrow=document.createElement('div');
maindivrow.classList.add('row', 'p-4');
let div1=document.createElement('div');
div1.classList.add('col-12');
let div1h1a=document.createElement('h1');
div1h1a.classList.add('text-left', 'd-inline-block', 'ml-5');
div1h1a.setAttribute('id','progressText');
let div1h1b=document.createElement('h1');
div1h1b.classList.add('float-right', 'd-inline-block');
div1h1b.innerText='Score';
div1.append(div1h1a,div1h1b);
let div2=document.createElement('div');
div2.classList.add('col-12');
let div2span=document.createElement('span');
div2span.classList.add('progress', 'float-left', 'd-inline-block');
let div2spandiv=document.createElement('div');
div2spandiv.classList.add('progress-bar', 'progress-bar-striped', 'bg-success');
div2spandiv.setAttribute('id','progress');
div2spandiv.setAttribute('role','progressbar');
div2spandiv.setAttribute('aria-valuenow','10');
div2spandiv.setAttribute('aria-valuemin','0');
div2spandiv.setAttribute('aria-valuemax','100');
div2span.appendChild(div2spandiv);
let div2h1=document.createElement('h1');
div2h1.classList.add('d-inline-block', 'float-right');
div2h1.setAttribute('id','score');
div2.append(div2span,div2h1);
let div3=document.createElement('div');
div3.classList.add('col-12', 'text-left');
let div3h3=document.createElement('h3');
div3h3.setAttribute('id','question');
div3h3.classList.add('pt-3');
div3.appendChild(div3h3);
let div4=document.createElement('div4');
div4.setAttribute('id','divA');
div4.classList.add('col-12', 'border', 'rounded', 'border-primary', 'p-3');
let div4button=document.createElement('button');
div4button.classList.add('btn', 'btn-primary', 'd-inline-block', 'mt-2');
div4button.onclick=chooseA;
div4button.innerText='A';
let div4h3=document.createElement('h3');
div4h3.setAttribute('id','optionA');
div4h3.classList.add('d-inline-block', 'ml-3', 'choice-text');
div4.append(div4button,div4h3);
let div5=document.createElement('div5');
div5.setAttribute('id','divB');
div5.classList.add('col-12', 'border', 'rounded', 'border-primary', 'p-3');
let div5button=document.createElement('button');
div5button.classList.add('btn', 'btn-primary', 'd-inline-block', 'mt-2');
div5button.onclick=chooseB;
div5button.innerText='B';
let div5h3=document.createElement('h3');
div5h3.setAttribute('id','optionB');
div5h3.classList.add('d-inline-block', 'ml-3', 'choice-text');
div5.append(div5button,div5h3);
let div6=document.createElement('div6');
div6.setAttribute('id','divC');
div6.classList.add('col-12', 'border', 'rounded', 'border-primary', 'p-3');
let div6button=document.createElement('button');
div6button.classList.add('btn', 'btn-primary', 'd-inline-block', 'mt-2');
div6button.onclick=chooseC;
div6button.innerText='C';
let div6h3=document.createElement('h3');
div6h3.setAttribute('id','optionC');
div6h3.classList.add('d-inline-block', 'ml-3', 'choice-text');
div6.append(div6button,div6h3);
let div7=document.createElement('div7');
div7.setAttribute('id','divD');
div7.classList.add('col-12', 'border', 'rounded', 'border-primary', 'p-3');
let div7button=document.createElement('button');
div7button.classList.add('btn', 'btn-primary', 'd-inline-block', 'mt-2');
div7button.onclick=chooseD;
div7button.innerText='D';
let div7h3=document.createElement('h3');
div7h3.setAttribute('id','optionD');
div7h3.classList.add('d-inline-block', 'ml-3', 'choice-text');
div7.append(div7button,div7h3);
maindivrow.append(div1,div2,div3,div4,div5,div6,div7);
maindiv.appendChild(maindivrow);
document.body.append(loadQuestionAudio,lockOptionAudio,correctAnswerAudio,wrongAnswerAudio,maindiv);
};
createDOMElements();

let userScore=0;
let lockedChoice=false;
let correctAnswerIndex;
let loadQuestionAudio=document.getElementById('loadQuestion_audio');

let correctAnswerAudio=document.getElementById('correctAnswer_audio');
correctAnswerAudio.volume=0.1;
let wrongAnswerAudio=document.getElementById('wrongAnswer_audio');
wrongAnswerAudio.volume=0.1;
let lockOptionAudio=document.getElementById('lockOption_audio');
lockOptionAudio.volume=0.1;
let questionSet=JSON.parse(localStorage.getItem('questionSet'));
let currentQuestion=0;
let finishQuiz=function(){
    localStorage.setItem('userScore',userScore);
    window.location.href='end.html';
}
let loadNextQuestion=function(){
    try{
        loadQuestionAudio.play();
    }catch(err){console.log(err);}
let progress=document.getElementById('progress');
let widthProgress=(currentQuestion+1)*10;
progress.style='width: '+widthProgress+'%;height: 100%';
let questionNo=document.getElementById('progressText');
questionNo.innerText='Question '+(currentQuestion+1)+'/10';
let score=document.getElementById('score');
score.innerText=userScore;
let question=document.getElementById('question');
question.innerHTML=questionSet.results[currentQuestion].question;
correctAnswerIndex=Math.floor(Math.random() * 4);
let answers=questionSet.results[currentQuestion].incorrect_answers;
let correct_answer=questionSet.results[currentQuestion].correct_answer;
answers.splice(correctAnswerIndex,0,correct_answer);
let optionA=document.getElementById('optionA');
optionA.innerHTML=answers[0];
let optionB=document.getElementById('optionB');
optionB.innerHTML=answers[1];
let optionC=document.getElementById('optionC');
optionC.innerHTML=answers[2];
let optionD=document.getElementById('optionD');
optionD.innerHTML=answers[3];
}
let clearStylesOnDiv=function(currentDiv){
    if(currentDiv.classList.contains('correct'))
    currentDiv.classList.remove('correct');
    else if(currentDiv.classList.contains('wrong'))
    currentDiv.classList.remove('wrong');
};
let proceed=function(){
let divA=document.getElementById('divA');
clearStylesOnDiv(divA);
let divB=document.getElementById('divB');
clearStylesOnDiv(divB);
let divC=document.getElementById('divC');
clearStylesOnDiv(divC);
let divD=document.getElementById('divD');
clearStylesOnDiv(divD);

if(currentQuestion<9)
{
    currentQuestion++;
    lockedChoice=false;
    loadNextQuestion();
}
else
finishQuiz();
};

loadNextQuestion();
