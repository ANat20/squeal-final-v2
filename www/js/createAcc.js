var accCreation = function() {
    let prompt = document.getElementById("prompt");
    let workspace = document.getElementById("content");

    prompt.innerHTML = ""; 
    workspace.innerHTML = "";

    prompt.innerHTML += `<span class="tabPrompt">Welcome to Account Creation</span>`;

    workspace.innerHTML += `<div class="container">
                                <div class="login-form">
                                    <form id="registration">
                                        <div class="form-group">
                                            <input type="email" id="createEmail" class="form-control" placeholder="Email" required>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" id="createPass" class="form-control" placeholder="Password" pattern=".{6,}" title="Six or more characters" required>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary btn-block">Create Account</button>
                                        </div>
                                    </form>
                                </div>
                            </div>`;

    const regisFormEvent = document.querySelector('#registration'); 

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