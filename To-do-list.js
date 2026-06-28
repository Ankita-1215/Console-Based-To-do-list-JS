let list = [];
let req = prompt("Enter your request:");

while(true){
    if(req == "quit"){
        console.log("Quitting the app");
        break;
    }

    if(req == "list"){
        console.log("__________________");
        for(items of list){
            console.log(items);
        }
        console.log("__________________");
    }
    else if(req == "add"){
        let items = prompt("Add your task:");
        list.push(items);
        console.log("Task added");
        }
    else if(req == "remove"){
        let items = prompt("Enter task to be removed:")
        let n = list.indexOf(items);
        list.splice(n,1);
        console.log("Task removed");
    }
    req = prompt("Enter your request:");
}