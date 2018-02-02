let fs = require("fs")

let getFileContent = function(){

    let txt = ""
    fs.readFile("./package.json", (err,data)=>{
        if( err ){
            console.log(err)
        }
        txt = data.toString()
    })

    while (!txt){
        setTimeout(function(){}, 100)
        console.log("txt====", txt)
    }

    return txt
}

let content = getFileContent()
console.log(content)