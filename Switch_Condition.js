
function check(data,title){
  
     switch(data){
        case 1:
            console.log("case one ")
            switch(title){
                case "hii":
                    console.log("hii how are you")
                break;
                case "hello":
                    console.log("hello how are you")
                    break;
        }
        break;
        case 2:
            console.log("second condition")
            break;
            case 3:
                console.log("third condition")
                switch(title){
                    case "hello":
                        console.log("that is third condtion")
                }
            break;
    }
}

check(3,"hello")
