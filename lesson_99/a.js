const EventEmitter=require("events")

const myEmitter=new EventEmitter()

myEmitter.on("event",(data)=>{
    console.log(data)
})


myEmitter.emit("event",{name:"emre", ID:5})