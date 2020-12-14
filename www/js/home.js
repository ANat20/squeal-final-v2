var dohome = function(){
    let workspace = document.getElementById("content");
    let prompt = document.getElementById("prompt");

    workspace.innerHTML = "";
    prompt.innerHTML = ""; 

    let span = document.createElement('span');
    let text = document.createTextNode("App created by Gilbert Greene (Z23444843)");
    span.appendChild(text);
    span.classList.add("tabPrompt");
    prompt.append(span);
}