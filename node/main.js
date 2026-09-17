//Synchronous code
console.log("Start");
for(let i = 0; i < 10; i++){
    console.log(i);
}
//asynchronous code
console.log("Async start");
setTimeout(() => {
    console.log("setTimeout");
}, 2000);
console.log("Async end ");   // to run type node main.js in terminal to see the ouutput
// 4 components of node js 
//call stack
//queue
//microtask queue
//macrotask queue