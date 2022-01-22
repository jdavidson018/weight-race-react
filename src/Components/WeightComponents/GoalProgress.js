import { CircularProgress, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

const GoalProgress = (props) => {
    return (
        <Paper>
            <Typography variant="h6">Goal Progress</Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item>
                    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                        <CircularProgress variant="determinate" value={20} />
                        <Box
                            sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: 'absolute',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography variant="caption" component="div" color="text.secondary">
                                {`${Math.round(20)}%`}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item>
                    Down 5
                </Grid>
            </Grid>
        </Paper>
    )
}

export default GoalProgress;