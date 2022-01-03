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
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
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
};

const LineChart = (props) => {

    //console.log(user);
    if (!props.weights) {
        return (
            <h1>No Weights Logged</h1>
        )
    }
    console.log(props.weights);
    let labels = props.weights.map(x => x.weightId);
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