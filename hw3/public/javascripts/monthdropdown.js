//Sydney Dean
//script for month dropdown

$(document).ready(function(){
    
    $(function(){
        $(".dropdown-content a").click(monthEventHandler)
    });

});

//helper for dropdown click events
// help from here https://teamtreehouse.com/community/how-to-get-the-value-of-an-element-when-it-is-clicked-in-javascript
// and here https://stackoverflow.com/questions/10351658/javascript-get-custom-buttons-text-value 
monthEventHandler = function(event){

    var month = this.innerText;
    var elem = document.getElementById("monthButton");
    var txt = elem.innerText;
    elem.innerText = month;

}