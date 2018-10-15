const EventEmitter = require('events')

class Job extends EventEmitter {}
job = new Job()

job.on('done',function(timeDone){
    console.log("job was pronounced done at",timeDone)
})

job.emit('done',new Date())
job.removeAllListeners()