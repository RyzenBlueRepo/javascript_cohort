let numberOfGuest = 1 ;

let pizzaSize;
/*
Small <=2
Medium <=5
large
*/

// MY CODE 

// if (numberOfGuest <=2) {
//     console.log('Order small size');
    
// }
// if (numberOfGuest > 2 && numberOfGuest <=5) {
//     console.log('Order medium size');
    
// }
// if (numberOfGuest >5) {
//     console.log('Order large size');
    
// }

// RIGHT CODE
if (numberOfGuest <= 2){
    pizzaSize= "Small"
}else if (numberOfGuest <=5) {
    pizzaSize = "Medium"  
}else {
    pizzaSize = "large"
}
// Internally if else works on Greedy Algorithms
console.log(pizzaSize);
