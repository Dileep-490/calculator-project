// Program for calculator
 const display= document.getElementById("display")

 function appendToDisplay(input){
    display.value+=input
 }
 function clearScreen(){
    display.value="";
 }
 function Evoulate(){
    try{
    display.value=eval(display.value)
    }
    catch(error){
        display.value="Math Error"
    }
 }
 //keyboard support input code
 document.addEventListener('keydown',function(event){
 const key=event.key
 if ((key>=0 && key<=9)|| key==="+" ||key==="-" ||key==="*"|| key==="/"|| key==="."){
    appendToDisplay(key)
 }
else if(key==="Enter"){
    Evoulate()
}
else if(key==="Backspace"){
    display.value=display.value.slice(0,-1)
}
else if(key==='c' || key==='C'){
    clearScreen();
}
})