 /*what is classes 
 1.make a classes
 2.call a classes
 3.define constructer
 4.make clss instance

ans--- classes ES6 mai aai ise pahle classes nhi thi object the
*/
console.log("hello classes")
//define a classes
class fruits{
 	
}
//call the class
 let callClass= new fruits();


 //use the constructor in class and variable with out use var nd let
 class callConstruct{
    name="akleem";
 	 constructor(){
 		console.log("auto call the constructer",this.name)
 	}
    funcName(){
        console.log("d'not need function keyword") ;
    }
 }
 const construVaribale=new callConstruct()
 construVaribale.funcName()

 ///....NOT -_ CONSTRUCTOR automatic call hota h par use  class ko kisi varibale m dalni padti or kisi variable me dalne k liye hme new keywork ka used kana padta h or last m class()

 //class k andar function bnana
 class withhinFuntion{
    funName(){
        return "not need the function keyword only direct write function name()"
    
 }
}
 let funResult=new withhinFuntion();
 funResult.funName()