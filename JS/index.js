console.log("Hello, World!");
//-----------------------------------------------//
let age = 20; // Example age
if(age>18){
    console.log("You are eligible for voting.");// can also use print inplace of console.log
}
else
{
    console.log("You are not eligible for voting.");// type node index.js in terminal to run the code
}
//-----------------------------------------------//
graduate=true;
branch="EE";
if(graduate === graduate){
    if(branch=== "EE"){
        console.log("Eligible");
    }
    else{
        console.log("Not Eligible");
    }
}
else
{
    console.log("Not Eligible");
}
//-----------------------------------------------//
graduate=true;
branch="EE";
if(graduate === graduate && branch === "EE"){
    console.log("Eligible");
}
else
{
    console.log("Not Eligible");
}
//-----------------------------------------------//
for(let i=0; i<=3;i++){
    let row="";
 for(let j=0;j<=i;j++){
    row+="*";
}
 console.log(row);
}
//-----------------------------------------------//
//functions//
function greet(){
    console.log("Hello");
}
greet();
//-----------------------------------------------//
const isVote = (age) => {//arrow function ka kaam hai const isVote= function(age){} 
if(age>18){
    console.log("You are eligible for voting.");// can also use print inplace of console.log
}
else
{
    console.log("You are not eligible for voting.");// type node index.js in terminal to run the code
}
}
isVote(20);
//-----------------------------------------------// hw 
//array map function //
//filter function 
//reduce function
