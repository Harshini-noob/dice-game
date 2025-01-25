var img1=document.querySelector(".img1");
var img2=document.querySelector(".img2");
var heading=document.querySelector("h1");
function refresh1(){
    var r1=Math.random();
    r1=Math.floor(r1*6)+1;
    if(r1===2){
        img1.setAttribute("src","./images/dice2.png");
    }
    if(r1===3){
        img1.setAttribute("src","./images/dice3.png");
    }
    if(r1===4){
        img1.setAttribute("src","./images/dice4.png");
    }
    if(r1===5){
        img1.setAttribute("src","./images/dice5.png");
    }
    if(r1===6){
        img1.setAttribute("src","./images/dice6.png");
    }
    return r1;
}
function refresh2(){
    var r2=Math.random();
    r2=Math.floor(r2*6)+1;
    if(r2===2){
        img2.setAttribute("src","./images/dice2.png");
    }
    if(r2===3){
        img2.setAttribute("src","./images/dice3.png");
    }
    if(r2===4){
        img2.setAttribute("src","./images/dice4.png");
    }
    if(r2===5){
        img2.setAttribute("src","./images/dice5.png");
    }
    if(r2===1){
        img2.setAttribute("src","./images/dice1.png");
    }
    return r2;

}
function final(){
    var r1=refresh1();
    var r2=refresh2();
    if(r1===r2){
        heading.textContent="draw";
    }
    else if(r1>=r2){
        heading.textContent="Player1 Wins!";
    }
    else{
        heading.textContent="Player2 Wins!";
    }
}

window.onload=final();
