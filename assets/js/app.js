// Projects Page
$("#bars").on("click", function() {

    if ($("#dropdown-menu").attr("data-show")==="false") {
        $("#dropdown-menu").show()
        $("#dropdown-menu").attr("data-show", "true")
    } else if ($("#dropdown-menu").attr("data-show")==="true") {
        $('#dropdown-menu').hide()
        $("#dropdown-menu").attr("data-show", "false")
    }
    
});

$("#navbarDropdown1").on("click", function() {

    if ($("#dropdown-menu1").attr("data-show")==="false") {

        $("#dropdown-menu1").show()
        $("#dropdown-menu1").attr("data-show", "true")
        $("#dropdown-menu2").hide()
        $("#dropdown-menu2").attr("data-show", "false")
    } else if ($("#dropdown-menu1").attr("data-show")==="true") {

        $("#dropdown-menu1").hide()
        $("#dropdown-menu1").attr("data-show", "false")
    }
    
});

$("#linkedin").on("click", function(){

    $("#dropdown-menu1").hide()
    $("#dropdown-menu1").attr("data-show", "false")
    $("#dropdown-menu2").hide()
    $("#dropdown-menu2").attr("data-show", "false")
});

$("#navbarDropdown2").on("click", function() {

    if ($("#dropdown-menu2").attr("data-show")==="false") {

        $("#dropdown-menu1").hide()
        $("#dropdown-menu1").attr("data-show", "false")
        $("#dropdown-menu2").show()
        $("#dropdown-menu2").attr("data-show", "true")
    } else if ($("#dropdown-menu2").attr("data-show")==="true") {

        $("#dropdown-menu2").hide()
        $("#dropdown-menu2").attr("data-show", "false")
    }
    
});

$("#github").on("click", function(){

    $("#dropdown-menu1").hide()
    $("#dropdown-menu1").attr("data-show", "false")
    $("#dropdown-menu2").hide()
    $("#dropdown-menu2").attr("data-show", "false")
});


// Contact Page
$("#submit").on("click", function(){

    $("input").val("")
});