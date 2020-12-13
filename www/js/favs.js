var dofavs = function(){
    let workspace = document.getElementById("content");
    let prompt = document.getElementById("prompt");

    workspace.innerHTML = "";
    prompt.innerHTML = "";

    let span = document.createElement('span');
    let text = document.createTextNode("Your favourites list is here");
    span.appendChild(text);
    span.id = "tabPrompt";
    prompt.append(span);
}