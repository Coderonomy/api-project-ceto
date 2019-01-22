const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    id: Number,
    username: String,
    email: String,
    location: String, 
    gender: String, 
    bio: String,
    pic: String,
    readyToMatch: Boolean, 
    CEO: Boolean,
    CTO: Boolean,
   
    myBusinessStage: String,
    myBusinessSkills: [ String ],
    techSkillsRequired: [ String ],
    equityOffered: Number,
    
    myTechSkills: [ String ],
    businessSkillsRequired: [ String ],
    connections: [ ObjectIds ]
});

module.exports = mongoose.model('User', userSchema);