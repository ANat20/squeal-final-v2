var dosearch = function(){
    let workspace = document.getElementById("content");
    let prompt = document.getElementById("prompt");

    workspace.innerHTML = "";
    prompt.innerHTML = "";

    prompt.innerHTML += `<span id="poweredBy">Powered by Yelp Fusion</span>`;
    workspace.innerHTML += `<div class="container">
                                <span class="tabPrompt">Search by Current Location</span> <br>
                                <button class="btn" onclick="getCurrentLoc('delish')">Current Location</button><br><br>

                                <<span class="tabPrompt">Search by Term</span> <br>
                                <input type="text" id="searchTerm" placeholder="Search by Term" required><br>
                                <button class="btn" onclick="getCurrentLoc('search')">Submit</button><br>

                                <form onclick="otherLocRequest()">
                                    <label for="searchLoc" id="tabPrompt">Search by Other Location</label><br>
                                    <input type="text" id="searchLoc" placeholder="Search by Location" required><br>
                                    <button class="btn" type="submit" value="Submit">
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