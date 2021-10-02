console.log("module tuterail welcome");
export default function user() {

console.log("modul call anoter way")//output module calll another way
}

// we are used the module with out using default keyword
export function text(){
	return "funtion call without used the default keyword"
}

//we can change the name dynamic becouse i can used the 2 function as some name;
export function fruit(){
	console.log("it is fruit function export file js")
}


//we can create a variabl and used the import file in html
export let textVar="its variable in js"

//we can create a class within the modele.
export class fistClass{
	textClass(){
		console.log("class in module")
	}
}
//we want used the diffrent way
class secondClass{
	secClass(){
		console.log("second class export diffrent way")
	}
}
export let getsecClass=new secondClass();