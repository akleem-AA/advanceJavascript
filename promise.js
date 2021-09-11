/*promise ko  tab  used  karte  h jab  hmara  codde  execute ho  jata  h  8*/

let  a=undefined;
setTimeout(()=>{
	a="hello  promise  ECMA	";
},3000)
console.log("setTimeout",a) //output  -undefine
// alert(a)//output  ==undefine  


//ise  promble  ko door  karne  ke  liye  hi promise  ka  used  kiya  gya h  
// let promiseData=  promise((resolved,reject)=>{
// 	setTimeout(()=>{
// 		a="promise data call within a promise function";
// 		resolved("done")
// 	},30000)
// })
// promiseData.then(()=>{
// 	alert(a)

// })




// GLOBLE FUNCTOIN  LIKE isFinite()-return true when we put the vlaue of any digit of numbers SECOND FUNCTON IS isNan( return true when input is string)
 console.log(isFinite(10))
  console.log(isFinite(10/2*2-11))//output always true
   console.log(isFinite(null))//true
    console.log(isFinite("10"))//true
    console.log("heheheheh")
 
 



  //isNaN()
  console.log(isNaN(10))//false
  console.log(isNaN("h"))
  console.log(isNaN(null))//false
  console.log(isNaN("10"))//false
 
