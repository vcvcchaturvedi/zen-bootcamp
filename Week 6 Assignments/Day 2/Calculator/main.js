


//Main functions follow...

//To get key pressed on body
document.body.onload=function(){
    if(localStorage.getItem('memory')!=null)
        localStorage.removeItem('memory');
        

}

//global object that stores keys and their keyCodes
let keys={ zero: 48, one: 49,two: 50, three: 51,four: 52, five: 53, six: 54, seven: 55, eight: 56, nine: 57,modulo: 37,decimal: 46,plus: 107,plus2: 43, minus: 45,multiply: 106,multiply2: 42, divide: 111,minus2: 95,divide2: 47,enter: 13,equal: 61};

//Function to show custom error message
let showErrorMessage=function(message)
{
    let errorDiv=document.getElementById('errorMessage');
    errorDiv.innerText=message;
    setTimeout(removeErrorMessage,5000);    //remove error message after few seconds
};
//Function to clear the error message
let removeErrorMessage=function(){
    let errorDiv=document.getElementById('errorMessage');
    errorDiv.innerHTML="<br>";
};

//Function to add the number input to the input area on page
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

//Function to evaluate the custom expression based on two operands and one operator
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

//Function to evaluate the expression entered by the user thus far
let evaluateInput=function(){
    let currentinput=document.getElementById('currentinput');                    //this is the current input field that is being entered by user
    let input=document.getElementById('input');                                 //this is the input entered so far field
    input.innerText+=' '+currentinput.innerText;                                //add current input to the main input text
    currentinput.innerText='0';                                                 
    let stringInput=input.innerText.trim().split(' ');
    try{                                                                        //check for correct input format
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
    else if(stringInput.length>=3)                  //correct input format
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
        
        currentinput.innerText=expression;                  //set calcualted expression as the current input value 
        input.innerText='';                                 //and clear input entered so far
    }
    else                                                    //this implies only one number, so show it on current input field and clear input entered so far
    {
        
        currentinput.innerText=input.innerText;
        input.innerText='';

    }
}
catch(error){showErrorMessage('Unknown error happened, please clear the input and try again..');}       //show the error message
};

//Function to restore key background during end of the animation on it
let restoreKeyBackground=function(el){
    el.classList.remove('animation');
};

//Function to animate the key background during its activation
let showAnimation=function(keycode){
    let keyToAnimate;
    switch(keycode){
        case keys.decimal: keyToAnimate=document.getElementById('decimal');
                        break;
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
    keyToAnimate.classList.add('animation');                                //animated appropriate key's background
    setTimeout(function(){restoreKeyBackground(keyToAnimate);},250);        //remove the animation's background after timeout
    
};

//Function to handle appropriate key press on body
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

//Function to handle 'C' key click
let clickc=function(){
    showAnimation('C');
    let input=document.getElementById('input');
    let currentinput=document.getElementById('currentinput');
    input.innerText='';
    currentinput.innerText='0';
};

//Function to handle 'CE' key click
let clickce=function(){
    showAnimation('CE');
    let currentinput=document.getElementById('currentinput');
    currentinput.innerText='0';
};

//Function to handle 'Backspace' key click
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

//function to handle '=' key click
let clickEquals=function(){
    showAnimation('EQ');
    evaluateInput();
};

//Function to handle 'MS' key click
let clickms=function(){
    showAnimation('MS');
    let currentinput=document.getElementById('currentinput');
    let currentText=currentinput.innerText;
    localStorage.setItem('memory',currentText);                         //Used Local Storage here to handle memory operations
    setActiveMemoryButtons();                                           //set other memory buttons active as memory is having some value
};

//Function to set all memory buttons active state(set the appropriate class for active)
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

//Function to set all required memory buttons to in-active state(set the appropriate class for inactive-gray)
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

//Function to handle mouseover on the 'M' (view memory) key
let viewMemory=function(){
    if(localStorage.getItem('memory')!=null){                           //if there is any memory saved...
    let memory=document.getElementById('memory');
    memory.innerText=localStorage.getItem('memory');                    //retrieve the memory item from Local Storage
    }
};

//Function to handle mouse out on the 'M' (view memory) key
let hideMemory=function(){
    let memory=document.getElementById('memory');
    memory.innerText='M';
};

//Function to handle 'MC' (clear memory) key
let clickmc=function(){
    if(localStorage.getItem('memory')!=null){                       //if there is any memory saved...
    showAnimation('MC');
    setInActiveMemoryButtons();                                     //set all required memory buttons inactive
    localStorage.removeItem('memory');                              //Remove the memory key from the Local Storage
    }
};

//Function to handle M+ (Memory Add) key click
let clickmplus=function(){
    showAnimation('MP');
    let currentinput=document.getElementById('currentinput');
    if(localStorage.getItem('memory')!=null)
    {
        let memoryValue=parseFloat(localStorage.getItem('memory'));
        let currentText=parseFloat(currentinput.innerText);
        memoryValue+=currentText;                                       //add current input number from memory
        localStorage.setItem('memory',memoryValue);
    }
    else
    {
        localStorage.setItem('memory',currentinput.innerText);
        setActiveMemoryButtons();
    }

};

//Function to handle M- (Memory Subtract) key click
let clickmminus=function(){
    showAnimation('MM');
    let currentinput=document.getElementById('currentinput');
    if(localStorage.getItem('memory')!=null)
    {
        let memoryValue=parseFloat(localStorage.getItem('memory'));
        let currentText=parseFloat(currentinput.innerText);
        memoryValue-=currentText;                                       //subtract current input number from memory
        localStorage.setItem('memory',memoryValue);
    }
    else
    {
        localStorage.setItem('memory',currentinput.innerText*-1);
        setActiveMemoryButtons();
    }
};

//Function to handle 'MR' (Memory Recall) key click
let clickmr=function(){
    if(localStorage.getItem('memory')!=null){                           //if there is any memory saved...
        showAnimation('MR');
        let currentinput=document.getElementById('currentinput');
        currentinput.innerText=localStorage.getItem('memory');         //set current input to memory saved
    }
};




//Creating DOM HTML objects now




let maindiv=document.createElement('div');
maindiv.classList.add('container','maincontainer');
let maindivrow=document.createElement('div');
maindivrow.classList.add('row');
let maindivrowcenterdiv=document.createElement('div');
maindivrowcenterdiv.classList.add('col-8', 'offset-2');
let div1=document.createElement('div');
div1.classList.add('row','title');
div1.innerText='Calculator';
let div2=document.createElement('div');
div2.classList.add('row','advice');
div2.innerText='Please use keyboard number keys and operator keys among +,-,*,/ and %.';
let div2br=document.createElement('br');
div2.appendChild(div2br);
div2.innerText+="Use 'Enter' key for getting output and click memory buttons below for utilising memory";
let div3=document.createElement('div');
div3.classList.add('row', 'borderall', 'input');
let div3span1=document.createElement('span');
div3span1.classList.add('input');
div3span1.setAttribute('id','input');
let div3span2=document.createElement('span');
div3span2.classList.add('currentinput');
div3span2.setAttribute('id','currentinput');
div3span2.innerText='0';
div3.append(div3span1,div3span2);
let div4=document.createElement('div');
div4.classList.add('row', 'borderall');
let div4innerdiv1=document.createElement('div');
div4innerdiv1.classList.add('col-2', 'mc', 'tooltip2');
div4innerdiv1.setAttribute('id','mc');

div4innerdiv1.innerText='MC';
div4innerdiv1span=document.createElement('span');
div4innerdiv1span.classList.add('tooltip2text');
div4innerdiv1span.innerText='Memory Clear';
div4innerdiv1.appendChild(div4innerdiv1span);
let div4innerdiv2=document.createElement('div');
div4innerdiv2.classList.add('col-2' ,'mr', 'tooltip2');
div4innerdiv2.setAttribute('id','mr');

div4innerdiv2.innerText='MR';
let div4innerdiv2span=document.createElement('span');
div4innerdiv2span.classList.add('tooltip2text');
div4innerdiv2span.innerText='Memory Recall';
div4innerdiv2.appendChild(div4innerdiv2span);
let div4innerdiv3=document.createElement('div');
div4innerdiv3.classList.add('col-2', 'buttons', 'tooltip2');
div4innerdiv3.setAttribute('id','mplus');
div4innerdiv3.innerText='M+';

let div4innerdiv3span=document.createElement('span');
div4innerdiv3span.classList.add('tooltip2text');
div4innerdiv3span.innerText='Memory Add';
div4innerdiv3.appendChild(div4innerdiv3span);
let div4innerdiv4=document.createElement('div');
div4innerdiv4.classList.add('col-2', 'buttons', 'tooltip2');
div4innerdiv4.setAttribute('id','mminus');

div4innerdiv4.innerText='M-';
let div4innerdiv4span=document.createElement('span');
div4innerdiv4span.classList.add('tooltip2text');
div4innerdiv4span.innerText='Memory Subtract';
div4innerdiv4.appendChild(div4innerdiv4span);
let div4innerdiv5=document.createElement('div');
div4innerdiv5.classList.add('col-2', 'buttons', 'tooltip2');
div4innerdiv5.setAttribute('id','ms');

div4innerdiv5.innerText='MS';
let div4innerdiv5span=document.createElement('span');
div4innerdiv5span.classList.add('tooltip2text');
div4innerdiv5span.innerText='Memory Store';
div4innerdiv5.appendChild(div4innerdiv5span);
let div4innerdiv6=document.createElement('div');
div4innerdiv6.classList.add('col-2', 'memory');
div4innerdiv6.setAttribute('id','memory');
let div4innerdiv6span=document.createElement('span');

div4innerdiv6span.innerText='M';
div4innerdiv6.appendChild(div4innerdiv6span);
div4.append(div4innerdiv1,div4innerdiv2,div4innerdiv3,div4innerdiv4,div4innerdiv5,div4innerdiv6);
let div5=document.createElement('div');
div5.classList.add('row', 'borderlr');
let div5innerdiv1=document.createElement('div');
div5innerdiv1.classList.add('col-3', 'buttons');
div5innerdiv1.setAttribute('id','modulo');
div5innerdiv1.innerText='%';
let div5innerdiv2=document.createElement('div');
div5innerdiv2.classList.add('col-3', 'buttons', 'tooltip2');
div5innerdiv2.setAttribute('id','ce');

div5innerdiv2.innerText='CE';
let div5innerdiv2span=document.createElement('span');
div5innerdiv2span.classList.add('tooltip2text');
div5innerdiv2span.innerText='Clear Last Number';
div5innerdiv2.appendChild(div5innerdiv2span);
let div5innerdiv3=document.createElement('div');
div5innerdiv3.classList.add('col-3', 'buttons', 'tooltip2');
div5innerdiv3.setAttribute('id','c');
div5innerdiv3.innerText='C';

let div5innerdiv3span=document.createElement('span');
div5innerdiv3span.classList.add('tooltip2text');
div5innerdiv3span.innerText='Clear All Input';
div5innerdiv3.appendChild(div5innerdiv3span);
let div5innerdiv4=document.createElement('div');
div5innerdiv4.classList.add('col-3', 'buttons', 'tooltip2');
div5innerdiv4.setAttribute('id','backspace');

div5innerdiv4.innerText='<=';
let div5innerdiv4span=document.createElement('span');
div5innerdiv4span.classList.add('tooltip2text');
div5innerdiv4.innerText='Backspace';
div5innerdiv4.appendChild(div5innerdiv4span);
div5.append(div5innerdiv1,div5innerdiv2,div5innerdiv3,div5innerdiv4);
let div6=document.createElement('div');
div6.classList.add('row', 'borderlr');
let div6innerdiv1=document.createElement('div');
div6innerdiv1.classList.add('col-3', 'buttons');
div6innerdiv1.setAttribute('id','seven');
div6innerdiv1.innerText='7';
let div6innerdiv2=document.createElement('div');
div6innerdiv2.classList.add('col-3', 'buttons');
div6innerdiv2.setAttribute('id','eight');
div6innerdiv2.innerText='8';
let div6innerdiv3=document.createElement('div');
div6innerdiv3.classList.add('col-3', 'buttons');
div6innerdiv3.setAttribute('id','nine');
div6innerdiv3.innerText='9';
let div6innerdiv4=document.createElement('div');
div6innerdiv4.classList.add('col-3', 'buttons');
div6innerdiv4.setAttribute('id','divide');
div6innerdiv4.innerText='/';
div6.append(div6innerdiv1,div6innerdiv2,div6innerdiv3,div6innerdiv4);
let div7=document.createElement('div');
div7.classList.add('row', 'borderlr');
let div7innerdiv1=document.createElement('div');
div7innerdiv1.classList.add('col-3', 'buttons');
div7innerdiv1.setAttribute('id','four');
div7innerdiv1.innerText='4';
let div7innerdiv2=document.createElement('div');
div7innerdiv2.classList.add('col-3', 'buttons');
div7innerdiv2.setAttribute('id','five');
div7innerdiv2.innerText='5';
let div7innerdiv3=document.createElement('div');
div7innerdiv3.classList.add('col-3', 'buttons');
div7innerdiv3.setAttribute('id','six');
div7innerdiv3.innerText='6';
let div7innerdiv4=document.createElement('div');
div7innerdiv4.classList.add('col-3', 'buttons');
div7innerdiv4.setAttribute('id','multiply');
div7innerdiv4.innerText='X';
div7.append(div7innerdiv1,div7innerdiv2,div7innerdiv3,div7innerdiv4);
let div8=document.createElement('div');
div8.classList.add('row', 'borderlr', 'borderbottom');
let div8innerdiv1=document.createElement('div');
div8innerdiv1.classList.add('col-3' ,'buttons' ,'tooltip2');
div8innerdiv1.setAttribute('id','equals');
div8innerdiv1.innerText='=';
let div8innerdiv1span=document.createElement('span');
div8innerdiv1span.classList.add('tooltip2text');
div8innerdiv1span.innerText='Calculate value of Input expression';
div8innerdiv1.appendChild(div8innerdiv1span);
let div8innerdiv2=document.createElement('div');
div8innerdiv2.classList.add('col-3', 'buttons');
div8innerdiv2.setAttribute('id','zero');
div8innerdiv2.innerText='0';
let div8innerdiv3=document.createElement('div');
div8innerdiv3.classList.add('col-3', 'buttons');
div8innerdiv3.setAttribute('id','decimal');
div8innerdiv3.innerText='.';
let div8innerdiv4=document.createElement('div');
div8innerdiv4.classList.add('col-3', 'buttons');
div8innerdiv4.setAttribute('id','plus');
div8innerdiv4.innerText='+';
div8.append(div8innerdiv1,div8innerdiv2,div8innerdiv3,div8innerdiv4);
let div9=document.createElement('div');
div9.classList.add('row', 'borderlr');
let div9innerdiv1=document.createElement('div');
div9innerdiv1.classList.add('col-3', 'buttons');
div9innerdiv1.setAttribute('id','one');
div9innerdiv1.innerText='1';
let div9innerdiv2=document.createElement('div');
div9innerdiv2.classList.add('col-3', 'buttons');
div9innerdiv2.setAttribute('id','two');
div9innerdiv2.innerText='2';
let div9innerdiv3=document.createElement('div');
div9innerdiv3.classList.add('col-3', 'buttons');
div9innerdiv3.setAttribute('id','three');
div9innerdiv3.innerText='3';
let div9innerdiv4=document.createElement('div');
div9innerdiv4.classList.add('col-3', 'buttons');
div9innerdiv4.setAttribute('id','minus');
div9innerdiv4.innerText='-';
div9.append(div9innerdiv1,div9innerdiv2,div9innerdiv3,div9innerdiv4);
let div10=document.createElement('div');
div10.classList.add('row', 'errorMessage', 'borderlr');
div10.setAttribute('id','errorMessage');
let div10br=document.createElement('br');
div10.appendChild(div10br);
maindivrowcenterdiv.append(div1,div2,div3,div4,div5,div6,div7,div9,div8,div10);
maindivrow.appendChild(maindivrowcenterdiv);
maindiv.appendChild(maindivrow);
document.body.appendChild(maindiv);
div4innerdiv1.onclick=clickmc
div4innerdiv2.onclick=clickmr;
div4innerdiv3.onclick=clickmplus;
div4innerdiv4.onclick=clickmminus;
div4innerdiv5.onclick=clickms;
div4innerdiv6.onmouseover=viewMemory;
div4innerdiv6.onmouseout=hideMemory;
div5innerdiv2.onclick=clickce;
div5innerdiv3.onclick=clickc;
div5innerdiv4.onclick=clickbackspace;
div8innerdiv1.onclick=clickEquals;