const reuslt = document.querySelector('.reuslt') ;
const reuslt_text = document.querySelector('.reuslt_text') ;

const win = () => {
    sleep(1);
    reuslt.style.display = "flex" ;
    reuslt.style.backgroundColor = "green" ;
    reuslt_text.innerText = "You won the game congratulation...!";
}

const lose = () => {
    sleep(1);
    reuslt.style.display = "flex" ;
    reuslt.style.backgroundColor = "red" ;
    reuslt_text.innerText = "You lost the game";
} 

const draw = () => {
    sleep(1);
    reuslt.style.display = "flex" ;
    reuslt.style.backgroundColor = "yellow" ;
    reuslt_text.innerText = "Draw..!";
} 

const score = (score) => {
    sleep(1);
    reuslt.style.display = "flex" ;
    reuslt.style.backgroundColor = "blue" ;
    reuslt_text.innerText = "Your score is : " + score ;
} 

const os = () => {
    if (window.navigator.userAgent.indexOf("Android")   != -1) return "Android";
    if (window.navigator.userAgent.indexOf("Mac")       != -1) return "Mac/iOS";
    if (window.navigator.userAgent.indexOf("Linux")     != -1) return "Linux";
    if (window.navigator.userAgent.indexOf("Windows")   != -1) return "Windows";
    if (window.navigator.userAgent.indexOf("X11")       != -1) return "UNIX";
}

const sleep = (seconds) => {
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < seconds * 1000){
        end = new Date().getTime();
    }
}