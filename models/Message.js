const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({

message: {
        username: String,
        // user DB id instead of username for blocked users.
        blockedUsers: [ String ],
        to: String,
        from: String,
        text: String,
        timeSent: Date
        }

    })
 const Message = mongoose.model('message', userSchema);

 // module.exports = mongoose.model('User', userSchema);
 module.exports = Message;