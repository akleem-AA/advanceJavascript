//what is callback and promises of file system modul ko (fs== ko file system modul bolte he)||isme fs.readFile(konsi file ko read karna chahete ho)

console.log("welcome to promises")
let fs=require("fs")//file system
fs.readFile("file.text",(err,data)=>{
	console.log(err,data);
})