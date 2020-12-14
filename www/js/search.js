var dosearch = function(){
    let workspace = document.getElementById("content");
    let prompt = document.getElementById("prompt");

    workspace.innerHTML = "";
    prompt.innerHTML = "";

    prompt.innerHTML += `<span id="poweredBy">Powered by Yelp Fusion</span>`;
    workspace.innerHTML += `<div class="container">
                                <span id="tabPrompt">Search by Current Location</span> <br>
                                <button id="btn" onclick="getCurrentLoc('delish')">Current Location</button><br><br>

                                <form onsubmit="getCurrentLoc('search')">
                                    <label for="searchTerm" id="tabPrompt">Search by Term</label><br>
                                    <input type="text" id="searchTerm" placeholder="Search by Term" required><br>
                                    <input id="btn" type="submit" value="Submit">
                                </form> <br>

                                <form onsubmit="otherLocRequest()">
                                    <label for="searchLoc" id="tabPrompt">Search by Other Location</label><br>
                                    <input type="text" id="searchLoc" placeholder="Search by Term" required><br>
                                    <input id="btn" type="submit" value="Submit">
                                </form>
                            </div>`;
    /*
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
    */
}