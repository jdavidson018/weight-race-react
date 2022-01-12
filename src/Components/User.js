import React, { useEffect } from 'react';
import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import LineChart from "./LineChart";
import WeightInputForm from "./WeightInputForm";
import { useSelector, useDispatch } from 'react-redux'
import { fetchActiveUser } from '../Redux/Slices/usersSlice'
import WeightLog from './WeightComponents/WeightLog';

const User = () => {
    const dispatch = useDispatch()
    let isLoading = useSelector((state) => state.users.loadingActiveUser) === 'pending';
    let activeUser = useSelector((state) => state.users.activeUser);
    let params = useParams();

    useEffect(() => {
        dispatch(fetchActiveUser(params.userId))
    }, [params.userId, dispatch])

    if (isLoading || !activeUser) {
        return (
            <h1>Loading</h1>
        );
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="p"><strong>Name: </strong>{activeUser.firstName + " " + activeUser.lastName}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="p"><strong>Start Weight: </strong>{activeUser.startWeight}</Typography>
            </Grid>
            <Grid item md={8} sm={12}>
                <LineChart weights={activeUser.weights} label={activeUser.firstName + " " + activeUser.lastName} />
            </Grid>
            <Grid item md={4} sm={12} sx={{ mt: 8 }}>
                <WeightInputForm user={activeUser} />
            </Grid>
            <Grid item xs={5} sx={{ mt: 3, ml: 3 }}>
                <WeightLog />
            </Grid>
        </Grid>
    );
}

export default User