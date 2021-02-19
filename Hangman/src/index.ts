import 'regenerator-runtime/runtime'
let makeDOM2=function(){
let audio1=document.createElement('audio');
audio1.src="audio/1.mp3";
audio1.setAttribute('id','error1');
let audio2=document.createElement('audio');
audio2.src="audio/2.mp3";
audio2.setAttribute('id','error2');
let audio3=document.createElement('audio');
audio3.src="audio/3.mp3";
audio3.setAttribute('id','error3');
let audio4=document.createElement('audio');
audio4.src="audio/4.mp3";
audio4.setAttribute('id','error4');
let audio5=document.createElement('audio');
audio5.src="audio/5.mp3";
audio5.setAttribute('id','error5');
let audioLoose=document.createElement('audio');
audioLoose.src="audio/loose.mp3";
audioLoose.setAttribute('id','looseAudio');
let audioCorrect=document.createElement('audio');
audioCorrect.src="audio/correct.mp3";
audioCorrect.setAttribute('id','correctAudio');
let audioWonRound=document.createElement('audio');
audioWonRound.src="audio/wonRound.mp3";
audioWonRound.setAttribute('id','wonRoundAudio');
document.body.append(audio1,audio2,audio3,audio4,audio5,audioLoose,audioCorrect,audioWonRound);
let divOuter=document.createElement('div');
divOuter.classList.add('outer');
let div1=document.createElement('div');
div1.classList.add('top', 'center');
let div1b=document.createElement('b');
div1b.innerText="HANGMAN";
div1.appendChild(div1b);
let div2=document.createElement('div');
div2.setAttribute('id','playControls');
div2.classList.add('center');
let div2input=document.createElement('input');
div2input.setAttribute('type','text');
div2input.classList.add('nameField');
div2input.setAttribute('placeholder','Enter your name');
div2input.setAttribute('id','nameField');
let div2br1=document.createElement('br');
let div2br2=document.createElement('br');
let playButton=document.createElement('button');
playButton.classList.add('playButton');
playButton.setAttribute('id','playButton');
playButton.disabled=true;
playButton.innerText='Play Now';
let div2br3=document.createElement('br');
let div2br4=document.createElement('br');
let highScoresButton=document.createElement('button');
highScoresButton.setAttribute('id','highScores');
highScoresButton.classList.add('playButton');
highScoresButton.innerText='High Scores';
div2.append(div2input,div2br1,div2br2,playButton,div2br3,div2br4,highScoresButton);
let div3=document.createElement('div');
div3.classList.add('collapsed', 'inner');
div3.setAttribute('id','inner');
let div3div1=document.createElement('div');
div3div1.classList.add('left');
div3div1.setAttribute('id','left');
let div3div1img=document.createElement('img');
div3div1img.setAttribute('id','mainImg');
div3div1img.classList.add('imgMain');
div3div1img.src='images/0.jpg';
div3div1.appendChild(div3div1img);
let div3div2=document.createElement('div');
div3div2.classList.add('right');
let div3div2div1=document.createElement('div');
div3div2div1.classList.add('floatRight', 'collapsed', 'word');
div3div2div1.setAttribute('id','totalscore');
let div3div2div2=document.createElement('div');
div3div2div2.classList.add('word');
div3div2div2.setAttribute('id','word');
let div3div2div3=document.createElement('div');
div3div2div3.classList.add('word');
let div3div2div3label1=document.createElement('label');
div3div2div3label1.setAttribute('id','round');
div3div2div3label1.classList.add('floatRight');
div3div2div3label1.innerText=' Round: 1';
let div3div2div3br1=document.createElement('br');
let div3div2div3label2=document.createElement('label');
div3div2div3label2.setAttribute('id','score');
div3div2div3label2.classList.add('floatRight');
div3div2div3label2.innerText='Score: 6';
let div3div2div3br2=document.createElement('br');
div3div2div3.append(div3div2div3label1,div3div2div3br1,div3div2div3label2,div3div2div3br2);
let div3div2div4=document.createElement('div');
div3div2div4.setAttribute('id','NR');
div3div2div4.classList.add('center', 'collapsed');
let div3div2div4button=document.createElement('button');
div3div2div4button.setAttribute('id','nextRound');
div3div2div4button.classList.add('playButton');
div3div2div4button.innerText='Next Round';
div3div2div4.appendChild(div3div2div4button);
let div3div2div5=document.createElement('div');
div3div2div5.setAttribute('id','guessPalette');
div3div2div5.classList.add('guessPalette');
let divalpha1=document.createElement('div');
divalpha1.classList.add('row', 'center');
let a=document.createElement('button');
a.classList.add('buttonGuess');
a.innerText='A';
let b=document.createElement('button');
b.classList.add('buttonGuess');
b.innerText='B';
let c=document.createElement('button');
c.classList.add('buttonGuess');
c.innerText='C';
let d=document.createElement('button');
d.classList.add('buttonGuess');
d.innerText='D';
let e=document.createElement('button');
e.classList.add('buttonGuess');
e.innerText='E';
let f=document.createElement('button');
f.classList.add('buttonGuess');
f.innerText='F';
let g=document.createElement('button');
g.classList.add('buttonGuess');
g.innerText='G';
divalpha1.append(a,b,c,d,e,f,g);
let divalpha2=document.createElement('div');
divalpha2.classList.add('row', 'center');
let h=document.createElement('button');
h.classList.add('buttonGuess');
h.innerText='H';
let i=document.createElement('button');
i.classList.add('buttonGuess');
i.innerText='I';
let j=document.createElement('button');
j.classList.add('buttonGuess');
j.innerText='J';
let k=document.createElement('button');
k.classList.add('buttonGuess');
k.innerText='K';
let l=document.createElement('button');
l.classList.add('buttonGuess');
l.innerText='L';
let m=document.createElement('button');
m.classList.add('buttonGuess');
m.innerText='M';
let n=document.createElement('button');
n.classList.add('buttonGuess');
n.innerText='N';
divalpha2.append(h,i,j,k,l,m,n);
let divalpha3=document.createElement('div');
divalpha3.classList.add('row', 'center');
let o=document.createElement('button');
o.classList.add('buttonGuess');
o.innerText='O';
let p=document.createElement('button');
p.classList.add('buttonGuess');
p.innerText='P';
let q=document.createElement('button');
q.classList.add('buttonGuess');
q.innerText='Q';
let r=document.createElement('button');
r.classList.add('buttonGuess');
r.innerText='R';
let s=document.createElement('button');
s.classList.add('buttonGuess');
s.innerText='S';
let t=document.createElement('button');
t.classList.add('buttonGuess');
t.innerText='T';
let u=document.createElement('button');
u.classList.add('buttonGuess');
u.innerText='U';
divalpha3.append(o,p,q,r,s,t,u);
let divalpha4=document.createElement('div');
divalpha4.classList.add('row', 'center');
let v=document.createElement('button');
v.classList.add('buttonGuess');
v.innerText='V';
let w=document.createElement('button');
w.classList.add('buttonGuess');
w.innerText='W';
let x=document.createElement('button');
x.classList.add('buttonGuess');
x.innerText='X';
let y=document.createElement('button');
y.classList.add('buttonGuess');
y.innerText='Y';
let z=document.createElement('button');
z.classList.add('buttonGuess');
z.innerText='Z';
divalpha4.append(v,w,x,y,z);
div3div2div5.append(divalpha1,divalpha2,divalpha3,divalpha4);
div3div2.append(div3div2div1,div3div2div2,div3div2div3,div3div2div4,div3div2div5);
div3.append(div3div1,div3div2);
divOuter.append(div1,div2,div3);
document.body.appendChild(divOuter);
};
makeDOM2();
let hsButton:HTMLButtonElement=<HTMLButtonElement>document.getElementById('highScores');
hsButton.onclick=()=>{window.location.href="highScores.html"};
let points=6;
let totalscore=0;
let round=1;
let words:Array<String>=[];
let word: String;
let userName: String='';
let fetchWords=async function(){
    let data=await fetch('https://random-word-api.herokuapp.com/word?number=3');
    return data;
};
let endGame=async function(){
let highScoresData=await fetch('https://5fec5eeb573752001730b68d.mockapi.io/Hangman');
let highScores=await highScoresData.json();
console.log(highScores);
let minimum: Number,posid: Number;
if(highScores.length>0)
{
minimum=highScores[0].highscore;
posid=highScores[0].id;
for(let i=1;i<highScores.length;i++)
{
    if(highScores[i].highscore<minimum)
    {
    minimum=highScores[i].highscore;
    posid=highScores[i].id;
    }
}
}
else
{
minimum=0;
posid=0;
}
if(totalscore>=minimum)
{
    
    let data = {
        username: userName,
        highscore: totalscore,
      };
      if(highScores.length==0)
      {
          let resp=await fetch('https://5fec5eeb573752001730b68d.mockapi.io/Hangman',{
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              }
          });
          let result = resp.json();
          console.log(result);
      }
      else{
      let resp=await fetch('https://5fec5eeb573752001730b68d.mockapi.io/Hangman' + "/"+posid, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      let result = resp.json();
      alert('You have made it to the high score list!');
      window.location.href='highScores.html';
    }
       
        
}
else{
    alert("Game finished!");
    points=6;
    totalscore=0;
    round=1;
    words=[];
    userName='';
    let nameField:HTMLInputElement=<HTMLInputElement>document.getElementById('nameField');
    nameField.value="";
    let totalscoreDiv:HTMLDivElement=<HTMLDivElement>document.getElementById('totalscore');
    totalscoreDiv.classList.add('collapsed');
    let pcs: HTMLDivElement=<HTMLDivElement>document.getElementById('playControls');
    pcs.classList.remove('collapsed');
    let idiv: HTMLDivElement=<HTMLDivElement>document.getElementById('inner');
    idiv.classList.add('collapsed');
}
};
let wordcount: Number;
let resetWordPallette=function(){
    word=words[round-1].toUpperCase();
    let letters: HTMLDivElement=<HTMLDivElement>document.getElementById('word');
    while (letters.firstChild) {
        letters.removeChild(letters.firstChild);
    }
    let wordArray=word.split('');
    wordcount=wordArray.length;
    wordArray.forEach((x)=>{
        let uelem=document.createElement('u');
        uelem.classList.add(x);
        uelem.innerHTML='&nbsp;&nbsp;&nbsp;';
        letters.appendChild(uelem);
        letters.innerHTML+='&nbsp;'
    });
};
let correctguesses=0;

let resetGuessPallette=function(){
    correctguesses=0;
    let buttons=document.getElementsByClassName('buttonGuess');
    
    for(let i=0;i<buttons.length;i++)
    {
        if(buttons[i].classList.contains('buttonGuessCorrect'))
            buttons[i].classList.remove('buttonGuessCorrect');
        else if(buttons[i].classList.contains('buttonGuessError'))
            buttons[i].classList.remove('buttonGuessError');
    }
    let guessPalette:HTMLDivElement=<HTMLDivElement>document.getElementById('guessPalette');
    guessPalette.classList.remove('collapsed');
    for(let i=0;i<buttons.length;i++)
    {
        let bi: HTMLButtonElement=<HTMLButtonElement>buttons[i];
        bi.onclick=function(){
            let text=bi.innerText;
            if(word.includes(text))
            {
            bi.classList.add('buttonGuessCorrect');
            let letters: NodeListOf<HTMLElement>=<NodeListOf<HTMLElement>>(<HTMLDivElement>document.getElementById('word')).childNodes;
            
            for(let i=0;i<letters.length;i++)
            if(letters[i].nodeName=='U')
            if(letters[i].className==text)
            {
            letters[i].innerText=text;
            correctguesses++;
            }
            if(correctguesses==wordcount)
            {
                wonTheRound();
            }
            else
            {
                let audio: HTMLAudioElement=<HTMLAudioElement>document.getElementById('correctAudio');
                audio.volume=0.2;
                audio.play();
            }
            }
            else
            {
            bi.classList.add('buttonGuessError');
            loosePoint();
            }
            bi.disabled=true;
            };
            bi.disabled=false;
    }
};
let play=async function(){
    userName=(<HTMLInputElement>document.getElementById('nameField')).value;
    let wordsData=await fetchWords();
    words=await wordsData.json();
    let totalscoreDiv: HTMLDivElement=<HTMLDivElement>document.getElementById('totalscore');
    totalscoreDiv.classList.remove('collapsed');
    totalscoreDiv.innerText='Total Score: '+totalscore;
    
    resetWordPallette();
    wordcount=word.replace(' ','').length;
    (<HTMLDivElement>document.getElementById('playControls')).classList.add('collapsed');
    (<HTMLDivElement>document.getElementById('inner')).classList.remove('collapsed');
    resetGuessPallette();
};
(<HTMLButtonElement>document.getElementById('playButton')).onclick=play;
let revealWord=function(){
    let letters: NodeListOf<HTMLElement>=<NodeListOf<HTMLElement>>(<HTMLDivElement>document.getElementById('word')).childNodes;
    for(let i=0;i<letters.length;i++)
    {
        if(letters[i].nodeName=='U')
        letters[i].innerText=letters[i].className;
    }
};


let playNextRound=function(){
(<HTMLDivElement>document.getElementById('NR')).classList.add('collapsed');
round+=1;
(<HTMLLabelElement>document.getElementById('round')).innerText='Round: '+round;
let imgMainFresh: HTMLImageElement=<HTMLImageElement>document.getElementById('mainImg');
imgMainFresh.src='images/0.jpg';
points=6;
resetWordPallette();
resetGuessPallette();

let scoreDiv: HTMLLabelElement=<HTMLLabelElement>document.getElementById('score');
scoreDiv.innerText='Score: '+points;

};
(<HTMLButtonElement>document.getElementById('nextRound')).onclick=playNextRound;
let nextGame=function(){
let guessPalette: HTMLDivElement=<HTMLDivElement>document.getElementById('guessPalette');
guessPalette.classList.add('collapsed');
(<HTMLDivElement>document.getElementById('NR')).classList.remove('collapsed');

};
let wonTheRound=function(){
    totalscore+=points;
    let totalscoreDiv: HTMLDivElement=<HTMLDivElement>document.getElementById('totalscore');
totalscoreDiv.innerText='Total Score: '+totalscore;
let audio: HTMLAudioElement=<HTMLAudioElement>document.getElementById('wonRoundAudio');
audio.volume=0.2;
audio.play();
if(round<3)
nextGame();
else
endGame();
};
let looseGame=function(){
    totalscore+=points;
    let totalscoreDiv: HTMLDivElement=<HTMLDivElement>document.getElementById('totalscore');
totalscoreDiv.innerText='Total Score: '+totalscore;
    let audio: HTMLAudioElement=<HTMLAudioElement>document.getElementById('looseAudio');
	audio.volume=0.2;
    audio.play();
    if(round<3)
    nextGame();
    else
    endGame();
};
let nameChanged=function(){
let name: String=(<HTMLInputElement>document.getElementById('nameField')).value ;
let playButton: HTMLButtonElement=<HTMLButtonElement>document.getElementById('playButton');
if(name.length>0)
{
playButton.disabled=false;
}
else
{
playButton.disabled=true;
}
};
(<HTMLInputElement>document.getElementById('nameField')).onkeyup=nameChanged;
let loosePoint=function(){
let tries=6-points+1;
points--;

let scoreDiv: HTMLLabelElement=<HTMLLabelElement>document.getElementById('score');
scoreDiv.innerText='Score: '+points;
let imgHangman: HTMLImageElement=<HTMLImageElement>document.getElementById('mainImg');
imgHangman.src='images/'+tries.toString()+".jpg";
if(points==0)
{
revealWord();
looseGame();
return;
}
else
{
    let audio:HTMLAudioElement=<HTMLAudioElement>document.getElementById('error'+tries.toString());
	audio.volume=0.2;
    audio.play();
}

}


