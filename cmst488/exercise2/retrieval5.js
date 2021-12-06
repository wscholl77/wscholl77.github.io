$(document).ready(function () {

    $('#retrieve-resources').click(function () {
      var displayResources = $("#display-resources"); // set this to the display-resources ID in index.html
      var iso2code = $("#country").val(); // this variable should capture text input from the user
  
      displayResources.text('Loading data from JSON source...');
  
      /* AJAX Call to RESTful Service */
  
      $.ajax({
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
  });