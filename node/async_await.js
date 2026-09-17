function getUser(){
return new Promise((resolve,reject)=>{
    let user=true;
    if(!user){
        reject(new Error("User not exists"));
    
    }else
    {
        resolve({ 
            username:"John Doe",
            role:"ML Engineer"
    });
}
});
}
async function fetchUser(){ //yha hello ko pehle print karega aur fir getuser ko call karega
const response= await getUser() // getuser ek async function hai to ye promise ko call krta hai aur await ka use krke promise ke resolve hone ka wait krta hai
console.log(response);
}
fetchUser();
console.log("Hello");