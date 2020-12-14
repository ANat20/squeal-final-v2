document.addEventListener('DOMContentLoaded', onDeviceReady, false);

function onDeviceReady() {
    document.getElementById('in-out-tab').textContent = "Sign In";

    //Disable the input elements
    document.getElementById("search-tab").disabled = true;

    //Add onclick listeners
    document.getElementById('in-out-tab').addEventListener('click', toggleSignIn, false);

    //Make sure user is not signed in on page load.
    auth.signOut();
}

function toggleSignIn() {
    btnTxt = document.getElementById('in-out-tab').textContent;

    if (btnTxt == 'Login') {
        userCreds();
    } else if (btnTxt == 'Logout') {
        auth.signOut().then(() => {
            loggedOut();
            dohome();
        })
    } else {
        userCreds();
    }
}

function loggedIn() {
    document.getElementById('in-out-tab').textContent = 'Logout';
    document.getElementById("search-tab").disabled = false;
}

function loggedOut() {
    document.getElementById('in-out-tab').textContent = 'Login';
    document.getElementById("search-tab").disabled = true;
}