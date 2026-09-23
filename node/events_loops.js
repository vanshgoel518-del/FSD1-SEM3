import fs from 'fs'
console.log("Synchronous Task")

setTimeout(()=>{
    console.log("Set Time Out");
}, 2000)

setInterval(()=>{
    console.log("Set Interval");
}, 2000)

fs.writeFile("notes.txt","Hello ELCE-A",(err)=>{
    if(err){
        console.log(err);
        return
    }
    setTimeout(()=>{
        console.log("Inside fs module setTimeout")
    })
    setImmediate(()=>{
         console.log("Inside fs module setImmediate")
    })
    console.log("File has been written successfully");
})
setImmediate(()=>{
    console.log("Set Immediate");
})
console.log("another sync task");