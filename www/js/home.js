var dohome = function(){
    let workspace = document.getElementById("content");
    let prompt = document.getElementById("prompt");

    workspace.innerHTML = "";
    prompt.innerHTML = ""; 

    let span = document.createElement('span');
    let text = document.createTextNode("This app was made by Gilbert Greene (Z23444843)");
    span.appendChild(text);
    span.id = "tabPrompt";
    prompt.append(span);
}