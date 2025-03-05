Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`);
    
};
function masala() {}
function superchai() {}
//this context ke hisab se kam karta hai
//this.name function name return karta hai 
function greet (name){
    return`Hello ${name}`;
}

greet.describe();


//fuction declaration 
function add (a,b ){
    return a+b
}
//function expression 
const subtract = function add (a,b ){
    return a-b
}
//Arrow function 
const you = (a,d) => a+d

//first class function
function applyOperation (a,b, operation){
    return operation(a,b)
}
const result = applyOperation(5,4 ,(x,y)=> x/y)

//tiffin concept 
function(){
    let count = 0;
    return function (){
        count++;
        return count 
    }

}
//

//ife
(function (){
    console.log("hitesh");
})()
()()

