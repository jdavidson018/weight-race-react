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
import { useParams } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import { getUser } from "../Data/userData";

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
            text: 'Chart.js Line Chart',
        },
    },
};

const LineChart = (props) => {
    let params = useParams();
    let user = getUser(parseInt(params.userId, 10));
    console.log(user);

    let labels = user.weights.map(x => x.dateLogged.toDateString());
    let data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: user.weights.map(x => x.value),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };
    return <Line options={options} data={data} />;
}

export default LineChart;