// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Lesson cost calculator: runs when the "Calculate Cost" button is clicked on the Ski Lessons page
$("#btnSubmit").on("click", function (event) {
    event.preventDefault();

    // Read hours and rate from the form inputs
    let hours = parseFloat($("#numHours").val());
    let rate = parseFloat($("#rate").val());

    // Validate: hours must be a positive number
    if (hours <= 0 || isNaN(hours)) {
        alert("Please enter a positive number of hours.");
        return;
    }

    // Compute total and display it (2 decimal places)
    let total = hours * rate;
    $("#total").val(total.toFixed(2));
});