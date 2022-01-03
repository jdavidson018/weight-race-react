import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const Users = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <Typography variant="h6">
                Here you can view your progress and log new weights
            </Typography>
            <Outlet />
        </div>
    );
}

export default Users;