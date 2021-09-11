console.log("synchronous programing")
//synchronous  programing  is the  happnes  at  the  same time  its execute oneline at time  
function f1() {
 	console.log("fist functoin")
 	 } 
 	 function f2() {
 	 	console.log("second funtion")

 	 }
 	 f2()
 	 f1()    


 	 //isme function call hota h ya koi line bi to ek ek karke hoti usme wait nhi karti for example  we are create a setTimeout()funciton
 	 setTimeout(()=>{
 	 	console.log("fist no")
 	 },2000)
 	 console.log("second no")// output m pahle second no hi aayega then bad m fist wala print hoga becose usem time set hua h 




 	 //y hi hm function  call karte  hue  bi dek sakte  h  yadi  hmne koi  function ko setTimeout()  m  dal  diya to wo  bi bad m hi  hoga 
 	 setTimeout(()=>{
 	 	console.log(f2())
 	 },3000)