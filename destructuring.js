console.log("welcome to destructuring ");
/* it mainly used for allow tto unpack value form array or properties from object by using [paremeters]=getValue*/
let a,b;
[a,b]=[10,40]
console.log(a)//output=10
console.log(b)//output=40




//we are get the value into array by using normal method..
let arr=[2,4,5,3,"akleem"]
let getValue=arr[0];
console.log(getValue)//output only 2
 
 //we are find the all vlaues .
 for(let i=0;i<arr.length;i++){
 	let result=arr[i]
 	console.log(result)//ouput all array  printed..
 }

 //we are used the destructuring..to get values
 let [v1,v2,v3,v4,v5]=arr;
 console.log(v1);//ouput -2
 console.log(v2);//ouput -4

 //we are used rest oprator
 let [...values]=arr;
 console.log(values)//ouput-(5) [2, 4, 5, 3, 'akleem']


 //lets we want to find out the vlaue only wthin the array(array ki kuch value ko skip karna)
 let [s1,,s3,,s5]=arr;
 console.log(s3)//ouput -5
 //ya hm rest operator se kar sakte he
  let [vd,...restOp]=arr;
  console.log(restOp)//output-(4) [4, 5, 3, 'akleem']



  //we want to find out the vlaue in OBJECT....
  let obj={
  	name:"akleem",
  	email:"akleem789@",
  	rollno:3840
  }
  let resultObj=obj.name;
  console.log(resultObj) //output-akleem.. its noraml method to find object value
 //we are using the destructuring..
 let {email}=obj;
 console.log(email)

 //we want to print all obj..to used rest example
  let {...name}=obj;
  console.log(name)//ouput-{name: 'akleem', email: 'akleem789@', rollno: 3840} 
  let {...rollno}=obj
  console.log(rollno)//output-{name: 'akleem', email: 'akleem789@', rollno: 3840} some as ouput chahe property koi si bi ho
   // let {...email}=obj;
   // console.log(email)//ouput=Uncaught SyntaxError: Identifier 'email' has already been declared ..jis property ko desructuring m used kar chuke h use dobara nhi kar sakte
   