//first way 
/*
   syntax 
   function FnName(){
      logic
   }
*/


// 2. Arrow function
/*
   syntax 
   const FnName = () => {
      logic
    }
*/

// void functions are functions that do not return anything
//implementation 

// function add(a,b){
//     const sum = a + b;
//     return sum; 
// }

// let result =  add(1,2);
// console.log("The result is :" , result);  

//arrow function implementation

let add = (a,b) => {
  const sum = a + b; 
  return sum;
}

let result =  add(1,2);
console.log("The result is :" , result, " from the arrow function");  