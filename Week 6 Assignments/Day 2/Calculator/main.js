document.body.onload=function(){
    if(localStorage.getItem('memory')!=null)
        localStorage.removeItem('memory');
}
let keys={ zero: 48, one: 49,two: 50, three: 51,four: 52, five: 53, six: 54, seven: 55, eight: 56, nine: 57,modulo: 37,decimal: 46,plus: 107,plus2: 43, minus: 45,multiply: 106,multiply2: 42, divide: 111,minus2: 95,divide2: 47,enter: 13,equal: 61};
let showErrorMessage=function(message)
{
    let errorDiv=document.getElementById('errorMessage');
    errorDiv.innerText=message;
    setTimeout(removeErrorMessage,5000);
};
let removeErrorMessage=function(){
    let errorDiv=document.getElementById('errorMessage');
    errorDiv.innerHTML="<br>";
};
let pushKey=function(keycode)
{
    
    let currentinput=document.getElementById('currentinput');
    if(currentinput.innerText=='0' && keycode!=keys.minus && keycode!=keys.decimal && keycode!=keys.minus2 && keycode!=keys.divide && keycode!=keys.divide2 && keycode!=keys.multiply && keycode!=keys.multiply2 && keycode!=keys.plus && keycode!=keys.plus2 && keycode!=keys.modulo)
    currentinput.innerText='';
    if(keycode>=48 && keycode<=57 || keys.decimal==keycode)
    currentinput.innerText+=String.fromCharCode(keycode);
    else if(!(keys.equal==keycode)){
        let input=document.getElementById('input');
        let charOperation=String.fromCharCode(keycode);
        input.innerText+=' '+currentinput.innerText+' '+charOperation+' ';
        currentinput.innerText='';
        }
};
let evaluateExpression=function(op1,operator,op2){
    if(operator=='+')
    {
        return op1+op2;
    }
    else if(operator=='-')
    {
        return op1-op2;
    }
    else if(operator=='*'){
        return op1*op2;
    }
    else if(operator=='/'){
        return op1/op2;
    }
    else if(operator=='%'){
        return op1%op2;
    }
};
let evaluateInput=function(){
    let currentinput=document.getElementById('currentinput');
    let input=document.getElementById('input');
    input.innerText+=' '+currentinput.innerText;
    currentinput.innerText='0';
    let stringInput=input.innerText.trim().split(' ');
    try{
    let last=stringInput[stringInput.length-1].charAt(stringInput[stringInput.length-1].length-1);
    let first=stringInput[0].charAt(0);
    if(first=='-')
    first=stringInput[0].charAt(1);
    let x1=parseInt(first);
    let x2=parseInt(last);
    if(isNaN(x1) || isNaN(x2))
    {
        showErrorMessage('Please enter proper expression, the expression is ending in an operator and not a number!');
    }
    else if(stringInput.length>=3)
    {
        let operator=stringInput[1];
        
        let expression=evaluateExpression(parseFloat(stringInput[0]),operator,parseFloat(stringInput[2]));
        for(let i=3;i<stringInput.length;i+=2)
        {
            operator=stringInput[i];
            let op2=parseFloat(stringInput[i+1]);
            if(isNaN(op2))
            {
                showErrorMessage('The expression is incorrect with respect to the entered input (incorrect sequence of operators and operands!)');
                input.innerText='';
                return;
            }
            expression=evaluateExpression(expression,operator,op2);
        }
        
        currentinput.innerText=expression;
        input.innerText='';
    }
    else
    {
        
        currentinput.innerText=input.innerText;
        input.innerText='';

    }
}
catch(error){showErrorMessage('Unknown error happened, please clear the input and try again..');}
};
let restoreKeyBackground=function(el){
    el.classList.remove('animation');
};
let showAnimation=function(keycode){
    let keyToAnimate;
    switch(keycode){
        case keys.zero: keyToAnimate=document.getElementById('zero');
                        break;
        case keys.one: keyToAnimate=document.getElementById('one');
                        break;
        case keys.two: keyToAnimate=document.getElementById('two');
                        break;
        case keys.three: keyToAnimate=document.getElementById('three');
                        break;
        case keys.four: keyToAnimate=document.getElementById('four');
                        break;
        case keys.five: keyToAnimate=document.getElementById('five');
                        break;
        case keys.six: keyToAnimate=document.getElementById('six');
                        break;
        case keys.seven: keyToAnimate=document.getElementById('seven');
                        break;
        case keys.eight: keyToAnimate=document.getElementById('eight');
                        break;
        case keys.nine: keyToAnimate=document.getElementById('nine');
                        break;
        case keys.minus:
        case keys.minus2: keyToAnimate=document.getElementById('minus');
                        break;
        case keys.plus:
        case keys.plus2: keyToAnimate=document.getElementById('plus');
                        break;
        case keys.multiply:
        case keys.multiply2: keyToAnimate=document.getElementById('multiply');
                        break;
        case keys.divide:
        case keys.divide2: keyToAnimate=document.getElementById('divide');
                        break;
        case keys.modulo: keyToAnimate=document.getElementById('modulo');
                        break;
        case 'C': keyToAnimate=document.getElementById('c');
                        break;
        case 'CE': keyToAnimate=document.getElementById('ce');
                        break;
        case 'BS': keyToAnimate=document.getElementById('backspace');
                        break;
        case 'EQ': keyToAnimate=document.getElementById('equals');
                        break;
        case 'MS': keyToAnimate=document.getElementById('ms');
                        break;
        case 'MP': keyToAnimate=document.getElementById('mplus');
                        break;
        case 'MM': keyToAnimate=document.getElementById('mminus');
                        break;
        case 'MC': keyToAnimate=document.getElementById('mc');
                        break;
        case 'MR': keyToAnimate=document.getElementById('mr');
                        break;
    }
    keyToAnimate.classList.add('animation');
    setTimeout(function(){restoreKeyBackground(keyToAnimate);},250);
    
};
document.body.onkeypress=function(event){
    let keycode=event.keyCode;
    let valuesAllowed=Object.values(keys);
    if(valuesAllowed.includes(keycode)){
        if(keys.enter==keycode)
        {
            
            evaluateInput();
        }
        else{
        pushKey(keycode);
        showAnimation(keycode);
    }
    }
    else
    {
        showErrorMessage('Please press keys from only the characters allowed (0 to 9, +,-,*,/,and %');

    }
};
let clickc=function(){
    showAnimation('C');
    let input=document.getElementById('input');
    let currentinput=document.getElementById('currentinput');
    input.innerText='';
    currentinput.innerText='0';
};
let clickce=function(){
    showAnimation('CE');
    let currentinput=document.getElementById('currentinput');
    currentinput.innerText='0';
};
let clickbackspace=function(){
    showAnimation('BS');
    let currentinput=document.getElementById('currentinput');
    let textCurrentInput=currentinput.innerText;
    if(textCurrentInput.length==1)
    currentinput.innerText='0';
    else
    {
        let requiredText=textCurrentInput.substr(0,textCurrentInput.length-1);
        currentinput.innerText=requiredText;
    }
};
let clickEquals=function(){
    showAnimation('EQ');
};
let clickms=function(){
    showAnimation('MS');
    let currentinput=document.getElementById('currentinput');
    let currentText=currentinput.innerText;
    localStorage.setItem('memory',currentText);
    setActiveMemoryButtons();
};
let setActiveMemoryButtons=function(){
    let mClear=document.getElementById('mc');
    let mRecall=document.getElementById('mr');
    let memory=document.getElementById('memory');
    mClear.classList.remove('mc');
    mClear.classList.add('buttons');
    mRecall.classList.remove('mr');
    mRecall.classList.add('buttons');
    memory.classList.remove('memory');
    memory.classList.add('buttons');
};
let setInActiveMemoryButtons=function(){
    let mClear=document.getElementById('mc');
    let mRecall=document.getElementById('mr');
    let memory=document.getElementById('memory');
    mc.classList.remove('buttons');
    mc.classList.add('mc');
    mRecall.classList.remove('buttons');
    mRecall.classList.add('mr');
    memory.classList.remove('buttons');
    memory.classList.add('memory');
};
let viewMemory=function(){
    if(localStorage.getItem('memory')!=null){
    let memory=document.getElementById('memory');
    memory.innerText=localStorage.getItem('memory');
    }
};
let hideMemory=function(){
    let memory=document.getElementById('memory');
    memory.innerText='M';
};
let clickmc=function(){
    if(localStorage.getItem('memory')!=null){
    showAnimation('MC');
    setInActiveMemoryButtons();
    localStorage.removeItem('memory');
    }
};
let clickmplus=function(){
    showAnimation('MP');
    let currentinput=document.getElementById('currentinput');
    if(localStorage.getItem('memory')!=null)
    {
        let memoryValue=parseFloat(localStorage.getItem('memory'));
        let currentText=parseFloat(currentinput.innerText);
        memoryValue+=currentText;
        localStorage.setItem('memory',memoryValue);
    }
    else
    {
        localStorage.setItem('memory',currentinput.innerText);
        setActiveMemoryButtons();
    }

};
let clickmminus=function(){
    showAnimation('MM');
    let currentinput=document.getElementById('currentinput');
    if(localStorage.getItem('memory')!=null)
    {
        let memoryValue=parseFloat(localStorage.getItem('memory'));
        let currentText=parseFloat(currentinput.innerText);
        memoryValue-=currentText;
        localStorage.setItem('memory',memoryValue);
    }
    else
    {
        localStorage.setItem('memory',currentinput.innerText*-1);
        setActiveMemoryButtons();
    }
};
let clickmr=function(){
    if(localStorage.getItem('memory')!=null){
        showAnimation('MR');
        let currentinput=document.getElementById('currentinput');
        currentinput.innerText=localStorage.getItem('memory');
    }
};