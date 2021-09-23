let firstName = document.getElementById('firstname')
let lastName = document.getElementById('lastname')
let email = document.getElementById('email')
let pass = document.getElementById('password')
let submit = document.getElementById('submit')
submit.addEventListener('click',check)
function check(){
    firstNameCheck();
    lastNameCheck();
    emailCheck();
    password();
}
/**********
Checking firstName Validation
 **********/
function firstNameCheck(){
    let check = firstName.value;
    if(check.length === 0)
    {   let div = document.getElementById('firstName')
        let text = document.getElementById('firstError')
        firstName.dataset.placeholder = firstName.placeholder
        firstName.placeholder = '';
        text.textContent = "First Name cannot be empty"
        div.className = "input error"
    }
}
/**********
Checking lastName Validation
 **********/
function lastNameCheck()
{
    let check = lastName.value;
    if(check.length === 0)
    {   let div = document.getElementById('lastName')
        let text = document.getElementById('lastError')
        text.textContent = "Last Name cannot be empty"
        div.className = "input error"
        lastName.dataset.placeholder = lastName.placeholder
        lastName.placeholder = '';
    }
}
/**********
Checking email Validation
 **********/
function emailCheck(){
    let check = validateemail();
    if(check === false)
    {
        let div = document.getElementById('emailAddress')
        let text = document.getElementById('emailError')
        text.textContent = "Looks like this is not an email"
        div.className = "input error"
    }
}
function validateemail()  
{  
let x = email.value;
if(x.length === 0)
return false;
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  return false;  
  }  
}  
/**********
Checking password Validation
 **********/
function password(){
    let check = pass.value;
    if(check.length == 0)
    {
        let div = document.getElementById('Password')
        let text = document.getElementById('passwordError')
        text.textContent = "Password cannot be empty"
        div.className = "input error"
        pass.dataset.placeholder = lastName.placeholder
        pass.placeholder = '';
    }
}
