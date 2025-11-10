function delayedMessage(msg, ms) {
    setTimeout(()=>{
        console.log(msg)
    },ms)
}
delayedMessage("Hello motti:)",1000)
delayedMessage("Hello elchanan:)",2000)