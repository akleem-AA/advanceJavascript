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