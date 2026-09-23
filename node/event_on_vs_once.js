import EventEmitter from"node:events";
const emitter = new EventEmitter()
//event registration
emitter.on("login",()=>{//()ye call back function hai
console.log("User logged using on()method")
})
emitter.once("login",()=>{//()ye call back function hai
console.log("User logged using once()method")
})
console.log("first login");
emitter.emit("login")
console.log("second login");
emitter.emit("login")
console.log("third login");
emitter.emit("login")
