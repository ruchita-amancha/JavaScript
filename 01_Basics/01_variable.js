const accountId = 144553
let accountEmail = "ruchita@gamil.com"
var accountPassword = "12345"
accountCity="Mumbai"

// accountId = 2//not allowed 
console.log(accountId);

accountEmail="fhsdj@gamil.com";
accountPassword="3244343";
accountCity = "bengaluru"


console.log(accountEmail);

/*
Perfer not to use var
because of the issue in block scope and functional scope
*/
console.table([accountId,accountCity,accountEmail,accountPassword])
