$(document).ready(function () {
    // Use jQuery's ajax() method to fetch data from TVmaze API
    $.ajax({
        url: 'https://api.tvmaze.com/schedule',
        method: 'GET',
        success: function (data) {
            // Process and populate the schedule section
            // Ensure proper handling of the data and create a horizontal scrolling UI
        },
        error: function (error) {
            console.log('Error:', error);
        }
    });
});
