const ctx = document.getElementById('results-chart').getContext('2d');
const imageChart = new Chart(ctx, {

    type: 'bar',


    data: {
        labels: imageNamesArray,
        datasets: [{
            label: 'Image Votes',
            borderColor: '#F2C078',
            backgroundColor: '#345995',
            hoverBackgroundColor: '#F2C078',
            data: imageVotesArray
        }, {
            label: 'Times Image Was Shown',
            borderColor: '#F2C078',
            backgroundColor: '#CA1551',
            hoverBackgroundColor: '#3A2E39',
            data: ImageShownArray
        }]
    },

    options: {
        scales: {
            yAxis: [{
                ticks: {
                    beginAtZero: true
                },
                stacked: true
            }],
            xAxis: [{
            }]
        }
    }
})