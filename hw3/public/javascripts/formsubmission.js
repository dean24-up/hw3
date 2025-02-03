//Sydney Dean
//script for submitting the cheesecake order form


$(document).ready(function(){
    $("#placed").hide();

    $(function() {
        $("#order").click(formEventHandler);
    });

});   

//helper for form submission events
formEventHandler = function(event){

    var txt = $("#instructions").val();
        var vegan = txt.includes("vegan");
        if (vegan == true){
            alert("Cheesecake contains dairy!!");
        }
        else {
            //put together order note
            var quant = $("#quantity").val();
            var top = document.querySelector('input[name="topping"]:checked').value;
            $("#cakeForm").hide();
            
            //https://stackoverflow.com/questions/41764061/adding-text-to-an-existing-text-element-in-javascript-via-dom
            var placedNote = document.getElementById("placed");
            var newMessage = document.createTextNode("\n1 Cheesecake, Toppings: " + top + "(" + quant + "), Notes: \"" + txt + "\"");
            
            placedNote.appendChild(newMessage);
            
            $("#placed").show();	
        }					
}

