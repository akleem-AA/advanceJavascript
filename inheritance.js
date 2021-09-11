/* 1.what is inheritence
   2.make parent and child class
   3.interitance parent class
   4 complete example
   5. super()\


   inheritance parent class ki property ko child class m used karta h 
   */
   // class categry{
   // 	dryFruit(){
   // 		return "badam";
   // 	}
   // 	fruit(){
   // 		return "mamngos";
   // 	}
   // }
   // class  fruits extends categry{
   // 	super()
   // 	constructor(){
   // 		console.log("constructor call")
   // 	}
   // 	secodFritu(){
   // 		console.log("weclome fruits")
   // 	}
   // }
   // let resultCategroy= new categry;
   // let resultFrui= new fruits;
   // console.log(fruits.dryFruit())




   ///////////// / / / / / / / / / / / / / /////////////////////////Lexical scop for this..
   let obj={
      frind:"friends",
      list:["akleem","monika","ritik"],
      getValue:function() {
         console.log(this.list)
      }
   }
   obj.getValue();//output   

   //we can print the friend with name like  fried akleem / friend khan/ friend omakr
   let data={
      list:"friends",
      name:["akleem","khan","omakr"],
      getFriend:function(){
       this.name.map((item)=>{
         console.warn(this.list,item)
       })
      }

   }
  console.log(data.getFriend()) //output is freind akleem /
                                         // freind khan
  // console.log("obj",data.name +""+data.list) 