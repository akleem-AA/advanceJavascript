console.log("defaul-parameter ")
// ......question........
// 1.Default parameter
// 2. what is the Default parameter
// 3. make a function
// 4. use the Default parameter
// 5. pass function as parameter

// ans.. paramete wo hota h jo hm func(parameter ) dete h .
// ex..parameter
function add() {
	return 10*2;
}
console.log(add());//output 40
 // ........second method dynamic.....
 function addDynamic(a,b=10,c=add()){
 	return a+b+c;
 }
 // document.write(addDynamic(50,30))
 console.log(addDynamic(5,5))
 //by default c=ek function pass kar diya question 5 ka answer

 function main(a,b=main()){
 	return a+b;

 }
 console.log('heelo=',main(4,8))//ydi hm funtion ko uske parameter m hi pass karde to bi hamara code work karega .ouptu hello=12

 //example-2
 function text(a,b,c=text1()) {
     return a+b+c;
 }
 console.log("experiment=",text(2,4))//output =11 becouse 2+4+text1=5||=11
 function text1() {
     return 5;
 }