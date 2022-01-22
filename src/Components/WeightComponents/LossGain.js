import * as React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import RemoveIcon from '@mui/icons-material/Remove';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography } from '@mui/material';

const LossGain = (props) => {
    var style = null
    var backgroundStyle = null;
    if (props.amount < 0) {
        style = { color: 'green' }
        backgroundStyle = { backgroundColor: '#a1ffb4' }
    } else if (props.amount > 0) {
        style = { color: 'red' }
        backgroundStyle = { backgroundColor: '#fccadb' }
    } else if (!props.amount || props.amount === 0) {
        style = {}
        backgroundStyle = {}
    }

    return (
        <Paper sx={backgroundStyle}>
            <Typography variant="h6">{props.title}</Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={style}
            >
                <Grid item>
                    {renderIcon(props.amount)}
                </Grid>
                <Grid item>
                    {props.amount == null ? "N/A" : props.amount.toString()}
                </Grid>
            </Grid>
        </Paper>

    );
}

const renderIcon = (amount) => {
    if (amount < 0) {
        return <ArrowDownwardIcon fontSize="large"></ArrowDownwardIcon>
    } else if (amount > 0) {
        return <ArrowUpwardIcon fontSize="large"></ArrowUpwardIcon>
    } else if (!amount || amount === 0) {
        return <RemoveIcon fontSize="large"></RemoveIcon>
    }
}

LossGain.propTypes = {
    amount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
};

export default LossGain;