const register = document.getElementById("register");
const login = document.getElementById("login");
// register form check
if(register){
    register.addEventListener("submit",function(e)
{
    e.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const mobno=document.getElementById("mobile").value;
    const password =document.getElementById("password").value;
// to check for email and password already exist in daatbase
    const storeduser=JSON.parse(localStorage.getItem(email));
    if(storeduser){
        alert("user already exist.please login");
    }
    else{
        localStorage.setItem(email,JSON.stringify(password));
        alert("Registration successfully completed!")
        window.location.href="loginpage.html";
    }
});
}
// == check only the value
// === check both value and datatype
//login form check
if(login){
    login.addEventListener("submit",(e)=>{
        e.preventDefault();
        const email=document.getElementById("email").value;
        console.log("email");
        const password =document.getElementById("password").value;
        const storeduser=JSON.parse(localStorage.getItem(email));
        console.log(storeduser);
        if(storeduser.email==email && storeduser.password == password){
            alert("Login is successfull!!!");
        }
        else{
            alert("Enter valid email and password");
        }
        window.location.href="home.html";
});
}