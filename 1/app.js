

function a() {
    
    var myvar="a";
    
    function b() {
    //var myvar;
        console.log(myvar);
    }
    
    console.log(myvar);
    
    b();
}

var myvar="global"

console.log("1:"+ myvar);

a();

console.log("2:"+myvar);