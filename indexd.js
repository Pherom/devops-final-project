// basic logic for login

{/* <form  >
<input type="text" name="username" placeholder="Username" required>
<input type="password" name="password" placeholder="Password" required>

<button type="submit" name="login">Login</button>
</form> */}


const errorElement = document.getElementById('error-area');

rightUsername = "admin";
rightPassword = "password";


const username = document.getElementById('username');
const password = document.getElementById('password');

const btn = document.getElementById('loginBtn');
let errors = []
errorElement.style.color = "red";

btn.addEventListener('click', function (e) {
    e.preventDefault();
    if(username.value === ""){
        errors.push("Username is required");
    }
    if(password.value === ""){
        errors.push("Password is required");
    }

     if((username.value !== rightUsername || password.value !== rightPassword)) {
        errors.push("Username or password is incorrect");

        errorElement.innerHTML = "Username or password is incorrect";
    }
    if(errors.length > 0){
        errorElement.innerHTML = errors.join(', ');
        errors = []
    }
    else if(errors.length === 0){
        errorElement.innerHTML= "Login successful";
        errorElement.style.color = "green";
    }

});
