console.log("find function is the find less the vlaue into array and findIndex is the fnd possion")
//isme hm kisi array ki value ko jan sakte h  hmm less the karke ya greate> karke vlue wo bi fist wali  nikal sate h 
let arr=[40,10,20,4,2,1,70,50];//we have a array to find a less the 10 fist value in array by using to find()
let result=arr.find((item)=>item<70 )
	// body...

console.log("find you value",result)//output 40 ..70 ke bad 40 sabse choti value in array






// what the possion of value to  using findIndex value of find into array
 let possion=arr.findIndex((data)=>{
 	return data<20;
 });
 console.log("findIndex possion value",possion)//output 1



 //we can used the array of object in find function............
 let obj=[
 {
    id:40,name:"akleem"
 },
 {
    id:310,name:"khan"
 },
  {
    id:201,name:"omka"
 },
  {
    id:202
 },
  {
    id:203
 },
  {
    id:50
 },
  ]
  let findObj=(ob)=> {
      return ob.name=="khan"
  }
  let findId=obj.find(findObj);
  console.log(findId)//jo 201 se choti rahi wo pura object dega ouput {id: 40, name: 'akleem'}
