const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

// this is from OAuth
    googleId: String,
    email: String,

// compulsory app data
    username: String,
	//this will be false for ctos
    isCeo: Boolean,
    isNetworker: Boolean,
    location: String, 
    gender: String, 
    bio: String,
    pic: String,
    remote: String,
    
// ctoSpecifics will exist if isCeo is false
    ctoSpecifics: {
        generalTech: [ String ],
        otherTech: String,
        specificTech:[String],
        businessSkillsRequired: [ String ],
        businessStage: String,
        businessBio: String,
        joinBusinessStage: String,
        careerPoint: String,
        gitHubLink: String,
        stackOverflowLink: String,
        codePenLink: String,
        twitterLink: String,
        mediumLink: String,
        
    },
// ceoSpecifics will exist if isCeo is true
    ceoSpecifics: {
        businessSkills: [ String ],
        joinBusinessStage: String,
        businessBio: String,
        careerPoint: String,
        gender: String,
        generalTechRequired: [String],
        equity: String,
        investment: String,
        specificTechRequired: [String],
        twitterLink: String,
        linkedInLink: String,
        mediumLink: String,
    },
    
})

module.exports = mongoose.model('User', userSchema);