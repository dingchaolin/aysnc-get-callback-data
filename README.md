# aysnc-get-callback-data

## 需求
```
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
```
- 想拿到 callback中的数据
- 在nodejs中好像真的很难做到

## 解决办法 比较Low
- 将异步方法写到一个微服务中
- 试用同步的http请求拿到 urllib-sync 这个模块可以

## urllib-sync
```
var request = require('urllib-sync').request;
var req = request("http://www.baidu.com");

console.log( req.data.toString() )

```
