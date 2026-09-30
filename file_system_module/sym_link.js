// import fs from 'fs'

// fs.symlink("user.txt", "link.txt", (err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log("Symbolic Link Created");
// })

import fs from 'fs';

// fs.symlink("notes.txt", "link.txt", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Symbolic link created");
// });

fs.lstat("link.txt",(err,stats) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(stats);
})

fs.rename('renamed_notes.txt', 'notes.txt', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('File renamed successfully');
})

//agar file ka size decsreade krna hai or aap chahtre ha ki baaki ka content delete ho jaaye to ek function hota hai fs.truncat

fs.truncate('notes.txt',10,(err)=>{
 if (err) {
        console.log(err);
        return;
    }
    console.log('File truncate successfully');
})

// agar aaplo file delete krni hai to fs.unlink 
// or agar directory bhi delte kr hai hai to fs.rm use kr lo (rm asynchronous hai)
// => ye jo arrow hai ye callback function hota hai 
// agar hme synchornous function use krna hai delete krne ke liye to hum (rm sink ka use krte hai )

fs.unlink('notes.txt',(err)=>{
if (err) {
        console.log(err);
        return;
    }
    console.log('File unlinked successfully');
})

// jaise hum code me kuch changes krte hia or fir live server use krte hia to vo apne aap reload hokr new output deta hai to uss process ko redundancy bolte hai to ye hum ek or tarah se kr skte hai 
// vo hai (file watching)
//fs.watch()
//fs.watchfile()

