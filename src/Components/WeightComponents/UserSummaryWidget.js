import React, { } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import LossGain from "./LossGain";
import PropTypes from 'prop-types';


const UserSummaryWidget = (props) => {
    const { firstName, totalChange, weekChange, dayChange } = props.user;

    return (
        <Paper>
            <Typography variant="h5" sx={{ mb: 3, mt: 1 }}>
                Welcome back <strong>{firstName}</strong>
            </Typography>
            <Grid
                container
                sx={{ pb: 2 }}
                direction="row"
                justifyContent="space-evenly" alignItems="center"
            >
                <Grid item xs={3}>
                    <LossGain amount={dayChange} title="Day" />
                </Grid>
                <Grid item xs={3}>
                    <LossGain amount={weekChange} title="Week" />
                </Grid>
                <Grid item xs={3}>
                    <LossGain amount={totalChange} title="Total" />
                </Grid>
            </Grid>
        </Paper >
    )
}

UserSummaryWidget.propTypes = {
    user: PropTypes.object.isRequired
};


export default UserSummaryWidget;