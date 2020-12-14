document.addEventListener("DOMContentLoaded", function(){
    //Do this when DOM is loaded

    //Set event listeners/handlers for nav bar
    document.getElementById('home-tab').onclick = dohome;
    document.getElementById('search-tab').onclick = dosearch;
    
    dohome();
});