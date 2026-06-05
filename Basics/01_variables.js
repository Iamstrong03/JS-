const accountID = 1444553;
let accountEmail = "hitesh@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState; //undefined

//accountID = 2 //not allowed

accountEmail = "hc@gmail.com" // allowed
accountPassword = "2121212"
accountCity = "bengalore"

// var use ni krna hai kabhi bhi bcoz of issue in block scope and functional scope 


console.log(accountState)
console.table([accountID, accountEmail, accountPassword, accountCity])//gives a tabular output