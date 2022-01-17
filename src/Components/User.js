import React, { useEffect } from 'react';
import { Box, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import LineChart from "./LineChart";
import WeightInputForm from "./WeightInputForm";
import { useSelector, useDispatch } from 'react-redux'
import { fetchActiveUser, fetchActiveUserFriends } from '../Redux/Slices/usersSlice'
import WeightLog from './WeightComponents/WeightLog';

const User = () => {
    const dispatch = useDispatch()
    let isLoading = useSelector((state) => state.users.loadingActiveUser) === 'pending';
    let activeUser = useSelector((state) => state.users.activeUser);
    let params = useParams();
    console.log(activeUser);

    useEffect(() => {
        dispatch(fetchActiveUser(params.userId))
        dispatch(fetchActiveUserFriends(params.userId))
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
            <Grid item md={7} sm={12}>
                <Box sx={{ height: '95%' }}>
                    <LineChart userUid={params.userUid} label={activeUser.firstName + " " + activeUser.lastName} />
                </Box>
                <br />
            </Grid>
            <Grid item md={5} sm={12}>
                <WeightLog />
            </Grid>
            <Grid item md={7} sm={12} sx={{ mt: 3 }}>
                <WeightInputForm user={activeUser} />
            </Grid>
        </Grid>
    );
}

export default User