var userCreds = function(){
    let workspace = document.getElementById("content");
    let prompt = document.getElementById("prompt");

    workspace.innerHTML = "";
    prompt.innerHTML = ""; 

    let span = document.createElement('span');
    let text = document.createTextNode("Welcome to Squeal!");
    span.appendChild(text);
    span.id = "tabPrompt";
    prompt.append(span);

    // Divs    
    let container = document.createElement('div');
    container.setAttribute('class', 'container');
    workspace.append(container);

    let loginForm = document.createElement('div');
    loginForm.setAttribute('class', 'login-form');
    container.appendChild(loginForm);

    // Login Form
    let form = document.createElement('form');
    form.setAttribute('id', 'login');
    loginForm.append(form);

    const loginFormEvent = document.querySelector('#login'); 

    // Username
    let formGroup1 = document.createElement('div');
    formGroup1.setAttribute('class', 'form-group');
    form.append(formGroup1);
    
    let email = document.createElement('input');
    email.setAttribute('type', 'email');
    email.setAttribute('id', 'loginEmail');
    email.setAttribute('class', 'form-control');
    email.setAttribute('placeholder', 'Email');
    email.setAttribute('required', '');
    formGroup1.append(email);

    // Password
    let formGroup2 = document.createElement('div');
    formGroup2.setAttribute('class', 'form-group');
    form.append(formGroup2);

    let password = document.createElement('input');
    password.setAttribute('type', 'password');
    password.setAttribute('id', 'loginPass');
    password.setAttribute('class', 'form-control');
    password.setAttribute('placeholder', 'Password');
    password.setAttribute('pattern', '.{6,}');
    password.setAttribute('title', 'Six or more characters');
    password.setAttribute('required', '');
    formGroup2.append(password);

    // Submit 
    let formGroup3 = document.createElement('div');
    formGroup3.setAttribute('class', 'form-group');
    form.append(formGroup3);

    let submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('class', 'btn btn-primary btn-block');
    submitText = document.createTextNode("Log in");
    submit.appendChild(submitText);
    formGroup3.append(submit);

    // Event Listener For Login
    loginFormEvent.addEventListener('submit', (e) => {
        e.preventDefault();

        const userEmail = loginFormEvent['loginEmail'].value;
        const userPass = loginFormEvent['loginPass'].value;
        
        try {
            auth.signInWithEmailAndPassword(userEmail, userPass).then(cred => {
                alert("Firebase login creds recieved.");
                loggedIn();
                dohome();
            });
        } catch(error) {
            alert(error.message);
        }
    });

    // Or
    let or = document.createElement('h3');
    orText = document.createTextNode('or');
    or.appendChild(orText)

    loginForm.append(or);

    // Create Account
    let createAcc = document.createElement('button');
    createAcc.setAttribute('type', 'submit');
    createAcc.setAttribute('id', 'create');
    createAcc.setAttribute('class', 'btn btn-primary btn-block');
    createText = document.createTextNode("Create Account");
    createAcc.appendChild(createText);
    
    loginForm.append(createAcc);

    document.getElementById('create').addEventListener("click", accCreation);
}

/*
<div class="container">
            <div class="login-form">
                <form onsubmit="userLogin()">
                    <h2 class="text-center">Log in</h2>       
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Username" required="required">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Password" required="required">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block">Log in</button>
                    </div>
                </form>
                <p class="text-center"><a href="#">Create an Account</a></p> 
        </div> 
*/