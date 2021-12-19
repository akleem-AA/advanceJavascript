console.log("welcome to array of object leran about it through complete js tuterial by yahu baba youtubu cannel")
//we are create a object and get the value by for loop	
 let person={
 	name:'akleem',
 	age:21,
 	question:"complete greducation "
 }
 person.address='vill nangal soti'
 // console.log("result",person)
 for(let value in person){
 	console.log("result",value+" "+person[value])
 }

//we can create a method which used the function within a object and work togther..
//EXAMPLE--1
person.sayHelo=function() {
	console.log("object call with anounoun function simple call a object")
}
person.sayHelo()
 
//EXAMPLE--2
function greet(){
	console.log('hello object')
}
person.nameFunction=greet;

person.nameFunction()//output hello object

//EXAMPLE--3
let peson2={
	name:function(){
		console.log("akleem789")
	},
	EC6 (){
		console.log("it is 4th EXAMPLE intruduce by 2015")
	},
	age:21,
	color:"red"
}
for(let data in peson2){
	console.log( data+peson2[data])//output only age and color
}

peson2.name()//output is currect=akleem789\
//EXAMPLE--4
peson2.EC6() //OUTPUT -it is 4th EXAMPLE intruduce by 2015


var a=10
const b=20
let z=a+b;
console.log("result MONIKa",z)


function monika(a,b){
	return a+b;
}
var vartika=monika(10,20)
console.log(vartika)
//https://apex.oracle.com/pls/apex/f?p=4500:1000:16897573364981:::::