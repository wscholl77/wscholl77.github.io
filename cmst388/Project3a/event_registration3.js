/*
		Your Name: <William Scholl>
		Last Modified Date: <07/04/2021>
		File: event_registration.js
		File Description: <Project 3 JavaScript>
*/

// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;


/*** YOUR CODE STARTS BELOW HERE ***/

// Validate form
function calculateTotal() {
    // Get the value of the input field with id="numTickets"
    let x = document.getElementById("numTickets").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 3) {
      text = "Input not valid";
    } else {
      text = "Input OK";
      document.getElementById("contactInformation").style.display = "block";
    }
    document.getElementById("msgTickets").innerHTML = text;
  }
// Currency formatting
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

// Calculate total
function calculateTotal() {
    var x = document.getElementById("numTickets").value;
    var costPerTicket = 5.00;
    var ticketSurcharge = 0.50;
    var y = costPerTicket + ticketSurcharge;
    var z = x * y;
    document.getElementById("totalCost").value = z; 
}

// Complete purchase

// Purchase button
/***function completePurchase() {
    alert("Thank you for your purchase. Your total cost is totalCost"
}***/

// Show contactInformation

/***document.getElementById("contactInformation").style.display = "block";***/

/***function calculateTotal() {
    var total = document.getElementById("totalCost").value;
    if (total > 1){
    document.getElementById("contactInformation").style.display = "block";
}
}***/

/***Countdown timer */
function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            alert("Sorry, your time to complete the form has expired. Please try again if you still wish to purchase tickets.");
             window.location.assign("https://cmst388-wscholl1.azurewebsites.net/project3/event_registration.html")
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( "timer" );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}
// change .5 to 10 before submitting
countdown( "timer", 10, 0 );