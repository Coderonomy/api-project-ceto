# project-ceto 
 back end

 **deployed link**

 https://projectceto.now.sh/

# Git Workflow - Feature Branch

**General Process**
 - At the start of each session, make sure you are on the master branch and do `git pull` to bring down any changes others have made
 - Create a feature branch for whatever you are working on using `git checkout -b <branch-name>`
 - Work on the feature branch, making regular commits to document the process
 - When ready (i.e. when a chunk of work has been completed, but not too much) push your feature branch to the GitHub repo with `git push origin <branch-name>`
 - Go onto GitHub and make a Pull Request. Write a comment to explain what this code does. Let your team members know that there is a pull request waiting for them to see.
 - Once your team member has done a code review and approved the pull request and your code is merged, switch onto your master branch and do `git pull` to get the changes.

**More Info**
- At the end of the day/every few days delete unusued branches both locally and on GitHub. Usually git/GitHub will let you know if these branches haven't yet been merged.


**GOOGLE OAUTH SETUP**

to continue you now require a google 
GOOGLE_CLIENTID and 
GOOGLE_CLIENT_SECRET

STEP 1

Go to https://console.cloud.google.com/apis/

click ENABLE APIS AND SERVICES.

search google plus. 

select google+ API.

left pannel go to credentials, create credentials/OAUTH Client ID.

select web application 

click on your newly created credential

you should have a client ID and secret ID. 



STEP 2 (localhost setup)

to have your project work on local host 

inside the "Authorized JavaScript origins" textbox 

http://localhost:5000

inside the "Authorized redirect URIs" textbox

http://localhost:5000/auth/google/redirect

STEP 3 (for deployment to now.sh. do the deployment steps below before doing the next steps. note: the OAUTH will not work in deployment unless you follow the steps below.)


same as STEP 2 but instead of localhost you place your now.sh URL 

YOU MUST VERIFY YOUR DOMAIN FOR THIS TO WORK. 

1. go to CREDENTIALS/DOMAIN VERIFICATION

2. click ADD DOMAIN

3. click ADD DOMAIN 

4. TAKE ME THERE

5. ADD A PROPERTY

6. insert URL
   
7. continue 
   
  download the html file and replace the existing google html file in the project. go to API.js and replace the existing app.get route with the new google route, given with the new google html. 
  
  DEPLOY AGAIN!

once everything is up and running click on the confirm link in step 3 for verifying google. If the link redirect successfully 

8. Click Im not a ROBOT

9.  click VERIFY

10. You should be redirected to a VERIFIED page with a GREEN tick. Congratulation!!!! 

11.  Go to CREDENTIALS/ OAuth concent screen

 Inside the Authorized domains, place your domain name that you just verified.

 12. Click SAVE

If you have done all these steps. I salute you!

**DEPLOYMENT**

download and install Now Desktop (which bundles Now CLI)

create an account 

In your now.json add below. 

 This is where you will store all your keys that will be sent to now.sh when deployed. be sure to place the now.json file inside your .gitignore file when pushing to github.

now.json
```javascript
"env": { 
    "GOOGLE_CLIENTID":"",
    "GOOGLE_CLIENT_SECRET":"",
    "DB_URL":"","COOKIE_KEY":""
} 
```

now setup your now alias name. 

```javascript
"name": "ceto",
"alias": "projectceto",
```

go to your package.json, inside your script object place the following line.

```javascript 
"deploy": "now && now alias"
```


To deploy your backend go to your terminal. 

terminal
```
> now
```
followed by 

```
now && now alias
```
this might take a minute. check your now.sh account. 



** Database Setup**

- All users are created when they are auth with Google OAuth.

- A 'blank' user has auth'd with Oauth, saved into db and nothing else

- A 'networker' user has entered the compulsory data only. A networker will not be able to view the full CEO and CTO users data, nor can they access the messaging.

- A CEO/CTO has completed the entire data applicable to their respective selection and can access the messaging.
```
{
  // OAuth data. All Fields REQUIRED.
  username: String, REQUIRED (from oauth)
  email: String, REQUIRED - (from oauth)
  googleID: string, Required - (form oauth)

// Compulsory app data. All Fileds REQUIRED
  isCeo: bool,
  isCto: bool,
  isNetworker: bool,
  location: String, 
  openToRemoteConnections: bool 
  genderIdentity: String, 
  bio: String, 
  pic: String,

  ctoSpecifics: {
    techSkills: string, REQ
    otherTech: string,
    skillsRequired: string, REQ
    techLevel: string, REQ
    gitHubLink: string,
    stackOverflowLink: string,
    codePenLink: string,
    twitterLink: string,
    mediumLink: string,
    businessStage: string, REQ
    businessBio: string, REQ
    desiredStartUpStage: string, REQ
  },

  ceoSpecifics: {
    businessSkills: string, REQ
    skillsRequired: string, REQ
    businessLevel: string, REQ
    linkedinLink: string,
    twitterLink: string,
    mediumLinke: string,
    investmentStatus: string, REQ
    equityShare: string, REQ
    businessStage: string, REQ
    businessBio: string, REQ
    desiredStartUpStage: string, REQ
  },

  message: {
    blockedUsers: string (userIDs),
    to: String,
    from: String,
    text: String,
    timeSent: dateTime
    }
 ```
