var accCreation = function() {
    let workspace = document.getElementById("content");
    let prompt = document.getElementById("prompt");

    workspace.innerHTML = "";
    prompt.innerHTML = ""; 

    let span = document.createElement('span');
    let text = document.createTextNode("Welcome to Account Creation!");
    span.appendChild(text);
    span.id = "tabPrompt";
    prompt.append(span);

    let container = document.createElement('div');
    container.setAttribute('class', 'container');
    workspace.append(container);

    let regisForm = document.createElement('div');
    regisForm.setAttribute('class', 'login-form');
    container.appendChild(regisForm);

    // Registration Form
    let form = document.createElement('form');
    form.setAttribute('id', 'registration');
    regisForm.append(form);

    const regisFormEvent = document.querySelector('#registration'); 

    // Username
    let formGroup1 = document.createElement('div');
    formGroup1.setAttribute('class', 'form-group');
    form.append(formGroup1);
    
    let email = document.createElement('input');
    email.setAttribute('type', 'email');
    email.setAttribute('id', 'createEmail');
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
    password.setAttribute('id', 'createPass');
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
    submit.setAttribute('id', 'regis');
    submit.setAttribute('class', 'btn btn-primary btn-block');
    submitText = document.createTextNode("Register");
    submit.appendChild(submitText);
    formGroup3.append(submit);

    // Event Listener For Registration Form
    regisFormEvent.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get user registration info from form submission.
        const userEmail = regisFormEvent['createEmail'].value;
        const userPass = regisFormEvent['createPass'].value;

        // Sign user up with Firebase. 
        auth.createUserWithEmailAndPassword(userEmail, userPass).then(cred => {
            alert("Firebase registration creds generated.");
            userCreds();
        });
    });
}