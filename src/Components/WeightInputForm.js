import React, { useState } from 'react';
import { Button, Card, CardContent, Divider, Grid, TextField, Typography } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import DismissableAlert from './DismissableAlert';
import { useDispatch } from 'react-redux'
import { addActiveUserWeight } from '../Redux/Slices/usersSlice'

const WeightInputForm = (props) => {
    const dispatch = useDispatch()
    const [weight, setWeight] = useState("")
    const [logDate, setLogDate] = useState(new Date());
    const [showAlert, setShowAlert] = useState(false);
    const closeAlert = () => {
        setShowAlert(false);
    }
    const handleSubmit = () => {
        dispatch(addActiveUserWeight({ logDate: logDate, value: weight, userId: props.user.userId }));
        setShowAlert(true);
    }

    return (
        <>
            <DismissableAlert closeAlert={closeAlert} show={showAlert} text={"Woohoo!!! Your new weight was added. Please refresh the page to update graph."} />
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
                            <TextField fullWidth id="Weight" label="Weight" variant="outlined" value={weight} onChange={e => setWeight(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker
                                    label="Log Date"
                                    inputFormat="MM/dd/yyyy"
                                    value={logDate}
                                    onChange={newValue => setLogDate(newValue)}
                                    renderInput={(params) => <TextField fullWidth {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: "right", paddingRight: "5%" }}>
                            <Button onClick={handleSubmit} variant="contained">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>

    );
}

export default WeightInputForm;