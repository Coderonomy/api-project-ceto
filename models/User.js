const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

// this is from OAuth
    googleId: String,
    username: String,
    email: String,

// compulsory app data
    isCeo: Boolean,
    isCto: Boolean,
    isNetworker: Boolean,
    location: String,
    openToRemoteConnections: Boolean, 
    genderIdentity: String, 
    bio: String,
    pic: String,
    
// if user.isCeo = true, or user.isCto = true
    ctoSpecifics: {
        techSkills: [ String ],
        otherTech: [ String ],
        skillsRequired: [ String ],
        techLevel: String,
        gitHubLink: String,
        stackOverflowLink: String,
        codePenLink: String,
        twitterLink: String,
        mediumLink: String,
        businessStage: String,
        businessBio: String,
        desiredStartUpStage: String
    },
    ceoSpecifics: {
        businessSkills: [ String ],
        skillsRequired: [ String ],
        businessLevel: String,
        gitHubLink: String,
        stackOverflowLink: String,
        codePenLink: String,
        twitterLink: String,
        mediumLink: String,
        businessStage: String,
        businessBio: String,
        desiredStartUpStage: String
    },
    message: {
        blockedUsers: [ String ],
        to: String,
        from: String,
        text: String,
        timeSent: Date
        }
})





module.exports = mongoose.model('User', userSchema);

// Previous Schema Data
// myBusinessStage: String,
//     myBusinessSkills: [ String ],
//     techSkillsRequired: [ String ],
//     equityOffered: Number,
    
//     myTechSkills: [ String ],
//     businessSkillsRequired: [ String ],
//     connections: [ String ]
// });