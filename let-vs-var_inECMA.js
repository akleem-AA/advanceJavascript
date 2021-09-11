
///var data type is store a variable value ..it is work only globel scop it does not mateh why the use of {var is not worked}

// var a =510;
// var a=40;
// console.log(a)
// var b=20;
// if(true){
// 	var b=40;
// 	console.log(b)
// }
// console.log(b)



//let is the parth  ECMA  it is maily used for a block of code like it work only { let worked
/*let b=20;
if(true){
	let b=40;
	console.log(b)//ye sif if-condition {block of code ke ander he}
}
console.log(b)//pahle if wala block output dega then globle wala console.log(b) par aayega
*/





//question what is hosing
/*hosing me ek variable ko value assing kara di to wo pahle call ho ya bad m call hoga hi //let ke sath hosting use nhi hoti jabki var k sath ho jati h
for exmaple 
*/
// console.log(c)
// var c=40;
//ouput ==undifine

// let c=455
// console.log(c)
// let c=99;///output errow show --ECMA-tuterail.js:38 Uncaught ReferenceError: Cannot access 'c' before initialization




// **************let with for loop*******************
for(var i=0;i<10;i++){
	setTimeout(()=>{
		document.write(i)
	}),1000
	
}
for(let i=0;i<10;i++){
	setTimeout(()=>{
		document.write(i)
	}),1000
	
}