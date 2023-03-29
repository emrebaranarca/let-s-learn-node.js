/* 
Bir dosya açmak, satır okumak, verinin bir yerde hazır hale gelmesi, 
klavyeden bir tuşa basılması, 
bir yere bağlanmak gibi her türlü işlemleri event(olay)’lara örnek verebiliriz.
*/

//bu tüm asenkron event işlemleri EventMitter classı üzerinden yapılır

/* 
const EventEmitter=require("events")   //modulü aldım

const eventEmitter=new EventEmitter()

//bir event oluşturmak için eventMitter.on()  olay tetiklendiğinde callback fonksiyonu çalışacak

eventEmitter.on("user",(data)=>{
    console.log(data)
})


// bir eventı tetiklemek eventMitter.emit()

eventEmitter.emit("user",{name:"emre", ID:5})

*/

//kendi oluştuduğumuz modül-class üzerinden event oluşturmak


const Logger=require("./logger")

const logger=new Logger()

logger.on("user",(data)=>{
    console.log(data)
})

logger.LOG("login succesful")      //tetiklemek















