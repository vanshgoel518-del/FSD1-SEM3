import fs from "fs/promises"

//async function greet(){
  //  return "Hello"
//}

// greet()
// .then((res)=>{
//     console.log(res);
// })
// .catch((error)=>{
//     console.log(error);
// })

// fs.writeFile("log.txt", "user sign up")
// .then((res)=>{
//     console.log(res);
// })
// .catch((error)=>{
//     console.log(error);
// })


// fs.readFile("log.txt", { encoding: "utf-8" })
// .then((res) => {
//     console.log(res);
// })
// .catch((error) => {
//     console.log(error);
// });

// fs.appendFile("log.txt", "user sign up")
// .then((res) => {
//     console.log(res);
// })
// .catch((error) => {
//     console.log(error);
// });

// fs.rm("log.txt")
// .then((res) => {
//     console.log(res);
// })
// .catch((error) => {
//     console.log(error);
// });

async function fileHandling(filename,content){
    await fs.writeFile(filename,content)
    console.log("file creaated");

    const data=await fs.readFile(filename,{encoding:"utf8"})
    console.log ("Data:",data);
    
}
fileHandling("user.txt","Username:Vansh")