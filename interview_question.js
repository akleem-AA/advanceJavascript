console.log(`welocme to interview questions`)



//QUESTION-1.how do crate a private letiable in js...... interview question
function secretvarible(){
	var private="it is private variable";
	return function(){
		return private;

	}
}
var getvariable=secretvarible();
console.log("call to private variable",getvariable())






//QUESTION-2.what is the output of this code.
var num=1;
function outer(){
	var num=2;

	function inner() {
		num++
		var num=1;
	console.log(num)	//ouptu 3 kyo ki y cosonle inner k andar hua hyadi y outer m hota to 2 ouput aata yadi y console.hota hi nhi to undife aata
 
  }
	inner();
  }
 outer(); // yha call karna jaruru h inner ko + outer() dono 






 //QUESTION-3.what is output of 
 console.log(typeof  1) //output is number
 console.log(typeof typeof 1) //output string
 console.log(typeof typeof typeof 1) //output string
 console.log(typeof (typeof 3))


//QUESTION-4 how to get value into array with use for loop 
 // who to work forEach fucntion //
 /*it is work like a loop to get a vlaue in array for example
 */
 let array=[2,3,5,3,5,6,5,4,"akleem"];
 array.forEach((item)=>{
 	console.log(item)//output=array print
 })
 ////ya////// we are get value by using rest Opertator [...]
 let [...rest]=array;
 console.log(rest)//output=(9) [2, 3, 5, 3, 5, 6, 5, 4, 'akleem']

 //.......YA.///////// its normal way to get value into array 
 for(let i=0;i<array.length;i++){
 	let getArray=array[i];
 	console.log(getArray)//output =all array print
 }



 //QUESTION-5 how to used ternary operator..
 //we are use the ternary operator instead if condton for example  SYNTEX=conditon?expresion1:expression2
 function testTernary(num){
 	let ternary=(num%2==0)?"even":"odd";
 	console.log(`rsult ${ternary}`)
 }
testTernary(17);
testTernary(22)


//QUESTION-6 what is the output of this code
console.log(2**4)//2*2*2*2=16
console.log(2**3**2)//logic 2**(3**2=9), then 2**9=512
console.log(2*5**2)//5**2=25 then 2*25=50

// how can we get the vlaue form array by using loop and new EC6
// let arrValue=[{name:"akleem",id:23},
//                 {name:"ritk",id:23},
//                 {
//                     name:"rohan",id:20
//                 },{
//                     name:"omkar",id:20
//                 }]
// for (var i = 0;arrValue.length ; i++) {
//     if(arrValue[i].id==20||arrValue[i].id==23){
//         console.log(arrValue[i])
//     }

//     }
//     let getResult=arrValue[i]
//     console.log("values",getResult)


// //how to add a new array of object within the exist array of obj
// let arrNew = [
//     { name:"string 1", value:"this", other: "that" },
//     { name:"string 2", value:"this", other: "that" }
// ];

// let objNew = arrNew.find((o, i) => {
//     if (o.name === 'string 1') {
//         arrNew[i] = { name: 'new string', value: 'this', other: 'that' };
//         return true; // stop searching
//     }
// });

// console.log(arrNew);



//how to calculate the factorial number in js...
function factorial(num){
    return 
        if (num==0) {
            return 1
        } else {
            return num*factorial(num-1);
        }
    
}
let factorilResult=factorial(5)
console.log("result of factorial",factorilResult)


function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}
let n = 4;
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);
 

 //calcute the vlaue of regin
 function test(n1,n2,n3){
    let result= n1*n2;
    return result-n3;
 }
 let aftab=test(5,4,2);
 console.log("result of regining",aftab)


 ///prince %off by a product


//  function presntagePruduct(mp,pres){
//     let divide=mp*pres/100
//     return divide
 
//  function finalResult(cunt,divide) {
//      return presntagePruduct(){
//         let result=divide-cunt
//      }
//  }
// }
//  console.log("ouptut of %",presntagePruduct(600,20))
//  console.log("finl resyull",finalResult(600))

//two function work toghere
function a(x) {
         // <-- function
  function b(y) { // <-- inner function
    return x + y; // <-- use variables from outer scope
  }
  return b;       // <-- you can even return a function.
}
console.log(a(3)(4));