
// jaise hum code me kuch changes krte hia or fir live server use krte hia to vo apne aap reload hokr new output deta hai to uss process ko redundancy bolte hai to ye hum ek or tarah se kr skte hai 
// vo hai (file watching)
//fs.watch()
//fs.watchfile()

import fs from 'fs'
// hum import ek or taraah se kr kste hai const krke 
fs.watch('info.txt',(eventType,filename)=>{
console.log("Event Type:",eventType);
console.log("FileName:",filename);
});
// fs.watch use krta hai operating system ka 