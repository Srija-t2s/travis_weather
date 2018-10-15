
// // function is assigned to a variable
// let sayHi = function(){
//     console.log('anonymous function');
// };

// //console.log(sayHi);

// sayHi();

function sayHi(){
    console.dir('hello');
}

let hi = sayHi;

hi();

var count = function(arr){
    return `there are ${arr.length} elements`
};

console.dir(count(['civic','historic','botanic','physic']));