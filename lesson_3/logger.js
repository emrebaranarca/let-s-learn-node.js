const EventEmitter=require("events")

class Logger extends EventEmitter{

    LOG(data){
        console.log(data)
        this.emit("user",{name:"baran",surname:"arca"})
    }


}
module.exports=Logger
