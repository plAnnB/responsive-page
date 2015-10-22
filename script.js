$(document).ready(function() {
    
    //display the page description when the component with ID help is clicked.
    $("#help").click(function(){
    $("#info").toggle();
    });
    //Display the travel gallery, and hide the swimming gallery when components with ID travel are clicked.
	$("#travel").click(function(){
    $("#travelling").slideDown();
    $("#swimming").slideUp();
    });
    // Display the swimming gallery, and hide the travel gallery when components with ID swim are clicked.
    $("#swim").click(function(){
    $("#swimming").slideDown();
    $("#travelling").slideUp();
        });
   /* $("div").click(function() {
    //alert(this.id); // or alert($(this).attr('id'));
    if(this.id === "travel")
    {
        $("#travelling").slideDown();
        $("#swimming").slideUp();
    }
    else if(this.id === "swim"){
    $("#swimming").slideDown();
    $("#travelling").slideUp();
    }
    else{
      
    $("#info").toggle();

    }
});*/
		});
