let teas =["masala","ginger","black","oolong","green"]
teas.length

for (let i = 0; i < teas.length +5; i++) {
   // console.log(`tea at index ${i}: ${teas[i]}`);
   
}
let myArray=[1,2,3,4,5,6];

function sumfac(numbers){
    let sum = 0;
        for (let i = 0; i < numbers.length; i++){
            sum=sum +numbers[i];
            //summ =+ numbers[i]
  
        }

        return sum
}
let result = sumfac(myArray)
console.log(result);

let anotherResult =sumfac([5,6,7,3,7,8,3]);
console.log(`My result is ${anotherResult}`);

