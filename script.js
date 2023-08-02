const theTimer=document.querySelector(".timer");
const testarea = document.querySelector("#test-area");
const testwrapper = document.querySelector(".test-wrapper");
const origintext = document.querySelector("#origin-text p").innerHTML;
const reset = document.querySelector("#reset");

var timer=[0,0,0,0];
var timerunning = false;
var Interval;

function Loadingtime(time){

    if(time < 10){

        time = "0" +time;
    }
    return time;
}

function time()
{
    let CurrentTime=Loadingtime(timer[0])+":"+Loadingtime(timer[1])+":"+Loadingtime(timer[2]);

    theTimer.innerHTML=CurrentTime;

    timer[3]++

    timer[0]= Math.floor((timer[3]/100)/60);
    timer[1]= Math.floor((timer[3]/100)-(timer[0]*60));
    timer[2]=Math.floor(timer[3] - (timer[1]*100) - (timer[0]*6000));


}

function start(){

    if(!timerunning){
        Interval = setInterval(time,10);
        timerunning = true;
    }

}

function SpellCheck(){


    let textEntered = testarea.value;
 


    let textmatch = origintext.substring(0,textEntered.length);

    if(origintext==textEntered){

        testwrapper.style.borderColor = "green";
        clearInterval(Interval);

    }else{
        if(textmatch==textEntered){
            testwrapper.style.borderColor = "yellow";

        }else{

            testwrapper.style.borderColor = "red";

        }
    }
}

function resetpage(){
    clearInterval(Interval);
    testwrapper.style.borderColor = "gray";
    testarea.value="";
    timerunning = false;
    timer = [0,0,0,0];
    theTimer.innerHTML = "00:00:00";

}
testarea.addEventListener("keypress",start);
testarea.addEventListener("keyup",SpellCheck);
reset.addEventListener("click",resetpage);


