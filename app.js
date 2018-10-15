//Probelm: we need a simple way to calculate a user badge and js points

//sol:Use Node.js to connect to Treehouse's API to get profile info
const https = require('https');

function printMessage(username,badgeCount,points){
    const message=`${username} has ${badgeCount} total badges and ${points} points in Javascript`;
    console.log(message);
}

function printError(){
    console.error(error.message);
}

function getProfile(username){
    try{
        const req = https.get(`https://teamtreehouse.com/${username}.json`,response => {
            if(response.statusCode === 200){
                let body = "";
                response.on('data',data => {
                    body += data.toString();
                });
                response.on('end',() => {
                    try{
                        const profile = JSON.parse(body);
                        printMessage(username,profile.badges.length,profile.points.JavaScript);
                        //console.dir(profile);
                    }catch(error){
                        printError(error);
                    }
                });  
            }else{
                const message = `The requested profile not found for ${username} (${response.statusCode})` ;
                const statusCodeError = new Error(message);
                printError(statusCodeError);
            }
            
        })
        
        req.on('error',printError);
    }catch(error){
        printError(error);
    }
    
}

 const users = process.argv.slice(2);
      users.forEach(getProfile);
//Connect to API URL(https://teamtreehouse.com/username.json)