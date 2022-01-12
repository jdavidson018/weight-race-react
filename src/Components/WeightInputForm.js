import React, { useState } from 'react';
import { Button, Card, CardContent, Divider, Grid, TextField, Typography } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import DismissableAlert from './DismissableAlert';
import { useDispatch, useSelector } from 'react-redux'
import { addActiveUserWeight, updateActiveUserWeight } from '../Redux/Slices/usersSlice'
import PropTypes from 'prop-types';

const WeightInputForm = (props) => {
    const dispatch = useDispatch()
    let isLoading = useSelector((state) => state.users.loadingActiveUser) === 'pending';
    let activeUser = useSelector((state) => state.users.activeUser);
    let title = props.edit ? "Edit Weight" : "Log Weight";

    const [weight, setWeight] = useState(props.weight ? props.weight.value : "")
    const [logDate, setLogDate] = useState(props.weight ? new Date(props.weight.logDate) : new Date());
    const [showAlert, setShowAlert] = useState(false);
    const closeAlert = () => {
        setShowAlert(false);
    }
    const handleSubmit = () => {
        if (props.edit) {
            dispatch(updateActiveUserWeight({ weightId: props.weight.weightId, logDate: logDate, value: weight, userId: activeUser.userId }))
            props.handleClose();
        } else {
            dispatch(addActiveUserWeight({ logDate: logDate, value: weight, userId: activeUser.userId }));
            setShowAlert(true);
        }
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            <DismissableAlert closeAlert={closeAlert} show={showAlert} text={"Woohoo!!! Your new weight was added. Please refresh the page to update graph."} />
            <Card variant="outlined">
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <Typography variant="h5">
                                {title}
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
                        {props.edit && (
                            <>
                                <Grid item xs={12} style={{ textAlign: "right", paddingRight: "2%" }}>
                                    <Button onClick={props.handleClose} color="warning" variant="contained">
                                        Cancel
                                    </Button>
                                    <Button onClick={handleSubmit} variant="contained" style={{ marginLeft: "1%" }}>
                                        Submit
                                    </Button>
                                </Grid>
                            </>
                        )}
                        {!props.edit && (
                            <Grid item xs={12} style={{ textAlign: "right", paddingRight: "5%" }}>
                                <Button onClick={handleSubmit} variant="contained">
                                    Submit
                                </Button>
                            </Grid>
                        )}
                    </Grid>
                </CardContent>
            </Card>
        </>

    );
}

WeightInputForm.propTypes = {
    edit: PropTypes.bool,
    weight: PropTypes.object
};


export default WeightInputForm;