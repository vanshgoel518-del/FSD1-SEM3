//function callback(){
//    console.log("callback function called");
//}
//setTimeout(callback, 2000);  // yha callback function ko 2 second ke baad call kiya h
  
function greet( username ,callback){
    console.log("Welcome")
    if(typeof callback === "function"){ // yha check kiya h ki callback function h ya nhi
        callback(username)
    }// == matlab value check krta h aur === matlab value aur type dono check krta h
}
greet("Zishan",(username)=> {   // arrow function is clled anonymous function
    console.log ("Hello,",username)
    
})