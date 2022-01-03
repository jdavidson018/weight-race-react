import React, { useState, useEffect } from 'react';
import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import UserService from "../Services/UserService";
import LineChart from "./LineChart";
import WeightInputForm from "./WeightInputForm";

const User = () => {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let params = useParams();

    useEffect(() => {
        UserService.getUserById(params.userId).then((user) => {
            console.log(user);
            setUser(user);
            setIsLoading(false);
        });
    }, [params.userId])

    if (isLoading) {
        return (
            <h1>Loading</h1>
        );
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="p"><strong>Name: </strong>{user.firstName + " " + user.lastName}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="p"><strong>Start Weight: </strong>{user.startWeight}</Typography>
            </Grid>
            <Grid item xs={8}>
                <LineChart weights={user.weights} label={user.firstName + " " + user.lastName} />
            </Grid>
            <Grid item xs={4}>
                <WeightInputForm user={user} />
            </Grid>
        </Grid>
    );
}

export default User