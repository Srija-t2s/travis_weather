const EventEmitter = require('events')

class Emitter extends EventEmitter {}
emitter =  new Emitter()

emitter.on('knock',function(){
    console.log('who there ??')
})

emitter.on('knock',function(){
    console.log('Go away!')
})

emitter.emit('knock')
emitter.removeAllListeners()
emitter.emit('knock')
//emitter.removeAllListeners()