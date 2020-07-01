

<script>
import { Bar } from 'vue-chartjs';

//var DATA_1 = [10, 20, 30, 40, 50, 30]
var DATA_1 = []
DATA_1 = [10, 20, 30, 40, 50, 30]

//
export default {
    extends: Bar,
    name: 'chart',
    data () {
        return {
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                {
                    label: 'Bar Dataset',
                    data: DATA_1,
                    backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Line Dataset',
                    data: [10, 50, 20, 30, 30, 40],
                    borderColor: '#CFD8DC',
                    fill: false,
                    type: 'line',
                    lineTension: 0.3,
                }
                ]
            },
            options: {
                scales: {
                    xAxes: [{
                        scaleLabel: {
                        display: true,
                        labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        ticks: {
                        beginAtZero: true,
                        stepSize: 10,
                        }
                    }]
                }
            },
//            data_1 : [],
        }
    },
    mounted () {
//        this.data_1 = [10, 20, 30, 40, 50, 30]
        //
        this.renderChart(this.data, this.options)
    }
}
</script>