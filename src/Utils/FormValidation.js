export const formValidation=(name, email, password)=>{
const isvalidPassword=/^(?=.*[!@#$%^&*])(?=.{6,})[A-Za-z0-9!@#$%^&*]+$/.test(password);
const isvalidEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isvalidName=/^[a-zA-Z\s'-]+$/.test(name);
// console.log(name, email, password);
if(name !== undefined && !isvalidName)
    return "Name is not valid"
if(!isvalidEmail)
    return "Email is not Valid"
if(!isvalidPassword)
    return "Password is not Valid"



}