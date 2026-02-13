//A callback is a function that is called in another function. 

function add(a, b, callback2){
    const sum = a + b; 
    callback2()
    return sum;
}

function anotherCallback(){
   console.log("Another callback was called")
}

function iWillCallSum(callback, c,d, callback2){
    const answer = callback(c,d, callback2);
    return answer
}

const finalAnswer =   iWillCallSum(add, 4, 5, anotherCallback);
console.log("final answer is: ", finalAnswer)