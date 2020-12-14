var dosearch = function(){
    let workspace = document.getElementById("content");
    let prompt = document.getElementById("prompt");

    workspace.innerHTML = "";
    prompt.innerHTML = "";

    prompt.innerHTML += `<span class="poweredBy">Powered by Yelp Fusion</span>`;
    workspace.innerHTML += `<div class="container">
                                <span class="tabPrompt">Search by Current Location</span> <br>
                                <button class="btn" onclick="getCurrentLoc('delish')">Current Location</button><br><br>

                                <span class="tabPrompt">Search by Term</span><br>
                                <input type="text" id="searchTerm" placeholder="Search by Term" required><br>
                                <button class="btn" onclick="getCurrentLoc('search')">Submit</button><br><br>

                                <span class="tabPrompt">Search by Location</span><br>
                                <input type="text" id="searchLoc" placeholder="Search by Location" required><br>
                                <button class="btn" onclick="otherLocRequest()">Submit</button>
                            </div>`;
}