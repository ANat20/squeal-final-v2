var dohome = function(){
    let workspace = document.getElementById("content");
    let prompt = document.getElementById("prompt");

    workspace.innerHTML = "";
    prompt.innerHTML = ""; 

    prompt.innerHTML += `<div class="home">
                            <span class="tabPrompt">Created by Gilbert Greene</span> <br>
                            <span class="tabPrompt">(Z23444843)</span>
                         </div>`;
}