$(document).ready(function() {
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
        url: `https://api.tvmaze.com/schedule?country=US&date=${getTomorrowDate()}`,
        method: 'GET',
        success: function(data) {
            for (let i = 0; i < 24; i++) {
                const show = data[i];
                const showElement = $('<div class="show test">');
                showElement.append(`<img src="${show.show.image.medium}" class="tomorrows-show" alt="${show.show.name}">`);
                $('.tomorrows-schedule').append(showElement);
            }
        },
        error: function(error) {
            console.log('Error fetching schedule data: ', error);
        }
    });
});
