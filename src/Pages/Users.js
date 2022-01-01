import { Typography } from "@mui/material";
import { Outlet, NavLink } from "react-router-dom";
import { getUsers } from "../Data/userData";

const Users = () => {
    let users = getUsers();
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