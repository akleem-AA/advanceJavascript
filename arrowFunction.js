/*1. what is arrow function .
  2. why used arrow function
  3. arrow function explain
  4. complex example
  5. this. in arrow function and normal function*/

console.log(`arrow funtion normal function se bhut easy hota he or isme bhut si new fasiblity h like this ka used `)

//normal function 
function normalFunction() {
	 return "its normal function";
}
console.log("yes",normalFunction())

//second type funciton name funtion
let test=function () {
	return "its second type funciton with let keyword  "
}
console.log("yes",test());


//we create a arrow funtion ..
let arrFunction=()=> "this is arrow function"
console.log(arrFunction());




//let's we can multiple a array[1,2,5,8,33,] by using normal funciton and using by map 
let arr=[1,4,55,7,3,2];
// let result=arr.map(function multipe(item) {
// 	return item*2;
// })
// console.log("multiple array",result)


// we can use the arrow funtion to multiple *2 array
let result1=arr.map((item1)=>item1*2);
console.log("multiple with arrow funtion ",result1)




