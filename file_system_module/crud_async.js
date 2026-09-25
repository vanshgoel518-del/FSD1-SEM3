import fs from 'fs'

fs.writeFile("config.txt","ELCE-A",(err )=>{
    if (err){
        console.log(err);
        return
    }
    console.log("File Created");

})



fs.readFile("config.txt",{encoding:"utf-8"},(err,data )=>{
    if (err){
        console.log(err);
        return
    }
    console.log("Data:",data);
})



fs.appendFile("config.txt","ELCE-A",(err )=>{
    if (err){
        console.log(err);
        return
    }
    console.log("File Updated ");
})

fs.rm("config.txt",(err )=>{
    if (err){
        console.log(err);
        return
    }
    console.log("File Deleted ");
})

fs.rm()