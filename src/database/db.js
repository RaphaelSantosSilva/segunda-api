const mongoose = require('mongoose')

function connect() {
    mongoose.connect('mongodb://localhost:27017/segunda-api')

    const db = mongoose.connection

    db.once('open', () => {
        console.log('Connected to databases')
    })

    db.on('error', console.error.bind(console, 'connection error'))
}

module.exports = {
    connect
}