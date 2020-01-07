const fs  = require('fs')
const jwt = require('jsonwebtoken')


/**
 * Generates the token for user.
 * @Function
 * @param {object} data Body of the login request. 
 * @return {string} Token for validation.
 */
const signIn = (req) => {
    
    let payload = {
        userName: data.userId,
        //Navegador
        //IP
    }
    let privateKEY  = fs.readFileSync('~/.K/private.key', 'utf8');
    // let issuer      = 'EmedCorp'; 
    // let subject     = 'some@user.com'; 
    // let audience    = 'http://mysoftcorp.in'; 
    let signOptions = {
        issuer:  i,
        subject:  s,
        audience:  a,
        expiresIn:  "12h",
        algorithm:  "RS256"
    };
    let token = jwt.sign(payload, privateKEY, signOptions)
    return token

}




//1800 0135 263

const verifyConnection = (data) => {
    let verifyOptions = {
        issuer:  i,
        subject:  s,
        audience:  a,
        expiresIn:  "12h",
        algorithm:  ["RS256"]
    };
    let publicKEY   = fs.readFileSync('~/.K/public.key', 'utf8');

    let legit = jwt.verify(token, publicKEY, verifyOptions)
}


module.exports = {
    signIn           : signIn,
    verifyConnection : verifyConnection
}


// PAYLOAD
var payload = {
    data1: "Data 1",
    data2: "Data 2",
    data3: "Data 3",
    data4: "Data 4",
   };
   // PRIVATE and PUBLIC key
   var privateKEY  = fs.readFileSync('~/.K/private.key', 'utf8');
   var publicKEY  = fs.readFileSync('~/.K/public.key', 'utf8');
   var i  = 'Mysoft corp';          // Issuer 
   var s  = 'some@user.com';        // Subject 
   var a  = 'http://mysoftcorp.in'; // Audience// SIGNING OPTIONS
   var signOptions = {
    issuer:  i,
    subject:  s,
    audience:  a,
    expiresIn:  "12h",
    algorithm:  "RS256"
   };

   var token = jwt.sign(payload, privateKEY, signOptions)



   var verifyOptions = {
    issuer:  i,
    subject:  s,
    audience:  a,
    expiresIn:  "12h",
    algorithm:  ["RS256"]
   };
   var legit = jwt.verify(token, publicKEY, verifyOptions)
   console.log("\nJWT verification result: " + JSON.stringify(legit));