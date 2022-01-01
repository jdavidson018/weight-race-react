import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { getUser } from "../Data/userData";
import LineChart from "./LineChart";
import WeightInputForm from "./WeightInputForm";

const User = () => {
    let params = useParams();
    let user = getUser(parseInt(params.userId, 10));
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="p">Name: {user.name}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="p">Start Weight: {user.startWeight}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="p">Goal Weight: {user.goalWeight}</Typography>
            </Grid>
            <Grid item xs={8}>
                <LineChart userId={params.userId} />
            </Grid>
            <Grid item xs={4}>
                <WeightInputForm />
            </Grid>
        </Grid>
    );
}

export default User