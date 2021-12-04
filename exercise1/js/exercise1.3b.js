$(function () {
    /* Selectors */
    $("#add-classes").click(function () {
        $('.selector-examples li:first').addClass('first');
        $('.selector-examples li:last').addClass('last');
        $('.selector-examples li:even').addClass('even');
        $('.selector-examples li:odd').addClass('odd');
        $('.selector-examples li:eq(3)').addClass('highlighter');
        $('.selector-examples li:eq(4)').addClass('highlighter');
        // Add remaining selectors here
    });

    /* Change Text */
    $("#change-language").click(function () {
        var inputValue = document.getElementById("newLanguage");
        var element = document.getElementsByClassName("currentLanguage");
        $( element ).html( inputValue );

        // Step 1: Create a new variable called inputValue and set it to the value of the #newLanguage id

        // Step 2: Create a new variable called element and set it to the value of the .currentLanguage class

        // Step 4: Using .html (http://api.jquery.com/html/), update element with inputValue

    });

    /* Toggles Part 1: Modifying CSS attributes with .css() */
    var boxColor = "rgb(153, 51, 51)"

    $("#button_toggle_colors").click(function() {
        /* Your code goes here */
        $(".box").each(function () {

            if ($(this).css('background-color') == boxColor) {
                $( this ).css( "background-color", "white");
                // element currently has a color
                // remove it
            }
            else {
                $( this ).css( "background-color", "#993333");
                // element currently has no background color
                // add it
            }
        });
    });

    /* Toggles Part 2: Adding/Removing classes to manipulate shapes */
    $("#button_toggle_roundedges").click(function() {
        $(".box").each(function () {
            $( this ).toggleClass( "round-edge");
            // Add a toggleClass using $(this) to add the class 'round-edge'
        });
    });

    /* Toggles Part 3: Adding new elements */
    $("#button_add_box").click(function() {
        /* Your code goes here  */

    });
});
