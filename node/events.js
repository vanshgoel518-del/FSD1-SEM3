import EventEmitter from "node:events";

const emitter=new EventEmitter()

//Event registration

emitter.on("orderPlaced",(orderName,orderPrice)=>{
    console.log(`Order ${orderName} and price:${orderPrice} placed successfully!`)
})
//( ` ye sign hai template literal)
emitter.on("orderPlaced",()=>{
    console.log("Notification send to the user");
})

emitter.on("orderPlaced",()=>{
    console.log("Email send");
})

emitter.on("orderPlaced",()=>{
    console.log("Inventory updated");
})

emitter.emit("orderPlaced","pizza",290);
