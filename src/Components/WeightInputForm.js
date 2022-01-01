import { Card, CardContent, Divider, Grid, TextField, Typography } from '@mui/material';
import React from 'react';

const WeightInputForm = (props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h5">
                            Log Weight
                        </Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth id="Weight" label="Weight" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth id="Date" label="Date" variant="outlined" />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    );
}

export default WeightInputForm;