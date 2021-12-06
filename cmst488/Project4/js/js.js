//Filterable List

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Click Event - contact page

function myFunction1() {
  document.getElementById("day1").innerHTML = "Monday: Closed";
}
function myFunction2() {
  document.getElementById("day2").innerHTML = "Tuesday: 9 AM - 3 PM";
}
function myFunction3() {
  document.getElementById("day3").innerHTML = "Wednesday: 9 AM - 3 PM";
}
function myFunction4() {
  document.getElementById("day4").innerHTML = "Thursday: 12 PM - 6 PM";
}
function myFunction5() {
  document.getElementById("day5").innerHTML = "Friday: 6 PM - 9 PM";
}
function myFunction6() {
  document.getElementById("day6").innerHTML = "Saturday: 9 AM - 9 PM";
}
function myFunction7() {
  document.getElementById("day7").innerHTML = "Sunday: Worship Service 10 AM";
}

//JSON 

$(document).ready(function() {
  $("#retrieve-resources").click(function() {
    var displayResources = $("#display-resources");
    displayResources.text("Loading data from JSON source...");
    $.ajax({
      type: "GET",
      dataType : "json",
      url: "https://api.npoint.io/40c340f2eb9f937df106",
      success: function(result) {
        console.log(result);
        var output =
          "<table><thead><tr><th>Name</th><th>Group</th><th>Zip</th></thead><tbody>";
        for (var i in result) {
          output +=
            "<tr><td>" +
            result[i].Name +
            "</td><td>" +
            result[i].Group +
            "</td><td>" +
            result[i].Zip +
            "</td></tr>";
        }
        output += "</tbody></table>";
        displayResources.html(output);
        $("table").addClass("table");
      }
    });
  });
});

/*$(document).ready(function () {
  $('#retrieve-resources').click(function () {
    var displayResources = $("#display-resources"); // set this to the display-resources ID in index.html
    var iso2code = $("#country").val(); // this variable should capture text input from the user
    displayResources.text('Loading data from JSON source...');
    /* AJAX Call to RESTful Service */
    /*$.ajax({
      type: "GET", // Specify "GET" or "POST"
      url: "https://restcountries.com/v3/alpha/",
      data: { codes: iso2code }, // Use the format { parameterName: variable },
      success: function(result)
      {
          console.log(result);
        // Build output render
        var output=
            "<table><thead><tr><th>Name</th><th>Alpha 2 Code</th><th>Alpha 3 Code</th></thead><tbody>";
            for (var i in result) {
            output +=
            "<tr><td>" +
            result[i].name.common +
            "</td><td>" +
            result[i].cca2 +
            "</td><td>" +
            result[i].cca3 +
            "</td></tr>";
            }
            output += "</tbody></table>";
        // Add data to the output render
        // Create a for loop that will iterate over the result.RestResponse.result object and add <tr><td> element
        // Hint: You will want to display result[i].name.common, result[i].cca2, and result[i].cca3 in your table  
        displayResources.html(output);
        // Add bootstrap class to the table for styling
        $("table").addClass("table");
      }
    });
  });
});*/

//Toggle font on About Page

$(document).ready(function(){
  $("button").click(function(){
    $("p").toggleClass("main");
  });
});

//Hide show effect on give page

$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show();
  });
});

//RWD Navbar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}