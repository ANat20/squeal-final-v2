/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
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