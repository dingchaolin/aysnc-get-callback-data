let fs = require("fs")

let getFileContent = function(){

    let txt = ""
    fs.readFile("./package.json", (err,data)=>{
        if( err ){
            console.log(err)
        }
        txt = data.toString()
        console.log(txt)
    })

    while (!txt){
        setTimeout(function(){
            console.log("txt====", txt)
        }, 100)

    }

    return txt
}

let content = getFileContent()
console.log(content)