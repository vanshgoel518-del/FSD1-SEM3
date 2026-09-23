//CRUD
//Sync
//Async
//---> Callback based methods
//---> Promises based methods 

import fs from 'fs'

fs.writeFileSync("notes.txt","Hello World")// agar foile exist nhi krti to usko create krega or agar exist krti hai to usko over write kr dega 


const data =fs.readFileSync("notes.txt","utf8")
console.log("Data:",data)
// output- Data: <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
// ab hum encoding method ka use krege or isse kya higa ki ye buffer data ko human readable data me convert kr dega 
// utf 8 hai encoder 

//update the file 
fs.appendFileSync("notes.txt","hello World")

//delete the file
fs.rmSync("notes.txt")