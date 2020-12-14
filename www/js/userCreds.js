var userCreds = function(){
    let prompt = document.getElementById("prompt");
    let workspace = document.getElementById("content");

    prompt.innerHTML = ""; 
    workspace.innerHTML = "";

    prompt.innerHTML += `<span class="tabPrompt">Welcome to Squeal!</span>`;

    workspace.innerHTML += `<div class="container">
                                <div class="login-form">
                                    <form id="login">
                                        <div class="form-group">
                                            <input type="email" id="loginEmail" class="form-control" placeholder="Email" required>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" id="loginPass" class="form-control" placeholder="Password" pattern=".{6,}" title="Six or more characters" required>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary btn-block">Login</button>
                                        </div>
                                    </form>
                                    <h3>OR</h3>
                                    <button type="submit" id="create" class="btn btn-primary btn-block" onclick="accCreation()">Create Account</button>
                                </div>
                            </div>`;

    // Event Listener For Login
    const loginFormEvent = document.querySelector('#login');

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

    document.getElementById('create').addEventListener("click", accCreation);
}