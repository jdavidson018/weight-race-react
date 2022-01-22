import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { random_rgba, stillLoadingStates } from '../Data/utilityVariables';
import { fetchActiveUser, fetchActiveUserFriends } from '../Redux/Slices/usersSlice'
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
import PropTypes from 'prop-types';

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
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },

    },
    scales: {
        x: {
            id: 'user-x-axis',
            title: "Time",
            type: 'time',
            time: {
                unit: 'day'
            }
        }
    }
}

const LineChart = (props) => {
    const dispatch = useDispatch()
    let activeUserLoadingState = useSelector((state) => state.users.loadingActiveUser);
    let activeUser = useSelector((state) => state.users.activeUser);
    let friendsLoadingState = useSelector((state) => state.users.loadingActiveUserFriends);
    let friends = useSelector((state) => state.users.activeUserFriends);

    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        let newData = [];
        if (activeUserLoadingState === 'unloaded') {
            dispatch(fetchActiveUser(props.userUid));
        } else if (friendsLoadingState === 'unloaded') {
            dispatch(fetchActiveUserFriends(props.userUid));
        } else if (!stillLoadingStates.includes(activeUserLoadingState) && !stillLoadingStates.includes(friendsLoadingState)) {
            newData.push(
                {
                    label: 'You',
                    data: activeUser.weights.map(x => (
                        { x: x.logDate.substring(0, 10), y: x.value })),
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    xAxisId: 'user-x-axis'
                }
            )
            friends.filter(x => x.weights).forEach(friend => {
                newData.push(
                    {
                        label: friend.firstName,
                        data: friend.weights.map(x => (
                            { x: x.logDate.substring(0, 10), y: x.value })),
                        borderColor: random_rgba()
                    }
                )
            });
            setGraphData(newData);
        }
    }, [friends, activeUser, props.userUid, activeUserLoadingState, friendsLoadingState, dispatch])

    if (stillLoadingStates.includes(activeUserLoadingState) || stillLoadingStates.includes(friendsLoadingState)) {
        return (
            <h1>Still Loading</h1>
        )
    }

    //let labels = activeUser.weights.map(x => x.logDate.substring(0, 10)); //Only take the date part of the string so time is not part of the scale
    let data = {
        datasets: graphData
    };
    return <Line options={options} data={data} />;
}

LineChart.propTypes = {
    userUid: PropTypes.string
}

export default LineChart;