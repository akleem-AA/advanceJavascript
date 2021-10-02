/*rest opertor ... ise hm bhut sare parameter na pass karke ek rest oprator pass kardete h
  				   jisse hme call karte hue ya parmeter pass karte hue y nhi dena padta ki kitne parameter pass karne h ek function me*/

 function restOperator(a,b){
 	console.log("operator=",a,b);
 }
 restOperator("fist","seond")
 //that is simple method to call a fucntion and pass the parametes..






 //we are use the RestOperator when we want to pass multiple parameteris .it is return a array type output
 function fruits(...item) {
 	console.log("fruits=",item)
 }
 fruits("apple","mango","kiwi","etc")//fruits= (4) ['apple', 'mango', 'kiwi', 'etc']





 //calculator. using by simple function and pass parameters avrage of two no
 function calculator(a,b,c){
 	 if(a+b==20){
 		return 
 	}
 }
console.log("result=",calculator(10,10))