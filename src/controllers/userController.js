var mongoose = require('mongoose');




const checkIfValid = function(password,password2)
{
    if (password === password2)
    {
        return true;
    }
    return false;
}






const createUser = function(username,email,age,password1,password2) 
{
    if (!checkIfValid(password1,password2))
    {
        return "wrong password";
    }





}


module.exports = {createUser};