(function (name) {
    console.log("greeting "+ name);
})("sree");



function buildFunctions() {
    var arr= [];
    for(var i=0;i<3;i++) {
        
        arr[i] = function(){
            console.log(i);
        }
    }
    
    return arr;
}


var arr= buildFunctions();

arr[0]();
arr[1]();
arr[2]();



function buildFunctions2() {
    var arr= [];
    for(var i=0;i<3;i++) {
    
        arr[i] = (function (j){
            return function() {
                console.log(j);
            }
        }(i));
    }
    
    return arr;
}



var arr2= buildFunctions2();

arr2[0]();
arr2[1]();
arr2[2]();



var person = {
    firstName:"sriram",
    lastName:"alagappa",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
    
};

var func = function() {
    console.log(this.fullName());
};

func.bind(person)();

func.call(person);