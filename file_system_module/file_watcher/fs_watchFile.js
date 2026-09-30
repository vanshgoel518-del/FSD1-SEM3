import fs from 'fs'
fs.watchFile("info.txt",(curr,prev)=>{
console.log("Current Modified Time:",curr)
console.log("Previous Modified Time:",prev)
})
// ye use krta hai pooling method ka mtlb hum yha ek interval pass krte hai mtlb hum output kitne time baad track krna chahte hai jaise ki 2 min, 5 min 
// yha inteval mainly 5 second ka hoita hai 

// watchfile hum kha use kr skte hai--  


// 29 sep hw 
//fs.createReadStream
//fs.createWriteStream
// inn dono se relatred events like (data event hota hai read stream , error  event , end event)