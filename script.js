$(document).ready(function() {
    // Function to format the date for tomorrow in 'YYYY-MM-DD' format
    function getTomorrowDate() {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const year = tomorrow.getFullYear();
        let month = tomorrow.getMonth() + 1;
        let day = tomorrow.getDate();
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        return `${year}-${month}-${day}`;
    }


    $.ajax({
        url: 'https://api.tvmaze.com/schedule?country=US',
        method: 'GET',
        data: { date: getTomorrowDate() },
        success: function(data) {
            // Process the data and create the schedule UI
            for (let i = 0; i < 24; i++) {
                const show = data[i]; // Access show data

                // Create HTML elements for each show and append them to the schedule container
                const showElement = $('<div class="show">');
                showElement.append(`<img src="${show.show.image.medium}" alt="${show.show.name}">`);
                $('.tomorrows-schedule').append(showElement);
            }
        },
        error: function(error) {
            console.log('Error fetching schedule data: ', error);
        }
    });
});
