import React, { useEffect } from 'react';
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import LineChart from "./LineChart";
import WeightInputForm from "./WeightInputForm";
import { useSelector, useDispatch } from 'react-redux'
import { fetchActiveUser, fetchActiveUserFriends } from '../Redux/Slices/usersSlice'
import WeightLog from './WeightComponents/WeightLog';
import UserSummaryWidget from './WeightComponents/UserSummaryWidget';

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
            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={12} md={10} >
                    <UserSummaryWidget user={activeUser}>
                    </UserSummaryWidget>
                </Grid>

            </Grid>

            <Grid item md={8} sm={12}>
                <Paper sx={{ height: '95%' }}>
                    <Typography variant="h5">
                        Your Progress
                    </Typography>
                    <Box sx={{ ml: 2, mr: 2, mb: 2, mt: 2, height: '90%' }}>
                        <LineChart userUid={params.userUid} label={activeUser.firstName + " " + activeUser.lastName} />
                    </Box>
                </Paper>
                <br />
            </Grid>
            <Grid item md={4} sm={12}>
                <WeightLog />
            </Grid>
            <Grid item md={7} sm={12} sx={{ mt: 3 }}>
                <WeightInputForm user={activeUser} />
            </Grid>
        </Grid>
    );
}

export default User