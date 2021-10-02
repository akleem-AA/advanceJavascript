/*1.what is generator
  2.hwo to make generator function
  3.what is yleld in generator
  4.how to use it

*/





 console.log("generator function")
function* generatorFunc() {
	let a=10;
	let b=20;
	console.log(10+20)
	yleld "fist step completed"
	console.log(10-20)
	yleld "second step completed"
	console.log(10*20)
	yleld "3th step completed"
	console.log(10/20)
	yleld "4th step completed"
	return "all step completed"
	}
	console.log("result",generatorFunc)
 let getResult=generatorFunc();
 function getStep(){
 	console.log(getResult.next())
 }
 //errow