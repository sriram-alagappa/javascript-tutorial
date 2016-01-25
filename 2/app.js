function waitfor3sec(){
    var ms = 3000 + new Date().getTime();
    
    while(ms > new Date()) {}
    
    console.log("done wait for 3 sec");
}


function clickHandler(){
    console.log("clickHandler");
}

document.addEventListener('click',clickHandler);


waitfor3sec();

console.log("done from global console log");

