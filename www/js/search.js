var dosearch = function(){
    let workspace = document.getElementById("content");
    let prompt = document.getElementById("prompt");

    workspace.innerHTML = "";
    prompt.innerHTML = "";

    let span = document.createElement('span');
    let text = document.createTextNode("Search with Yelp Fusion");
    span.appendChild(text);
    span.id = "tabPrompt";
    prompt.append(span);

    let currentLoc = document.createElement('button');
    let currentText = document.createTextNode("Current Location");
    currentLoc.appendChild(currentText);
    currentLoc.id = "currentLoc";
    workspace.append(currentLoc);

    document.getElementById("currentLoc").addEventListener("click", getCurrentLoc);
}