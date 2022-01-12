import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale
} from 'chart.js';
import 'chartjs-adapter-date-fns';

import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale
);
var options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Progress',
        },
    },
    scales: {
        x: {
            title: "Time",
            type: 'time',
            time: {
                unit: 'day'
            }
        }
    }
}

const LineChart = (props) => {

    if (!props.weights) {
        return (
            <h1>No Weights Logged</h1>
        )
    }
    let labels = props.weights.map(x => x.logDate.substring(0, 10)); //Only take the date part of the string so time is not part of the scale
    let data = {
        labels,
        datasets: [
            {
                label: props.label,
                data: props.weights.map(x => x.value),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };
    return <Line options={options} data={data} />;
}

export default LineChart;