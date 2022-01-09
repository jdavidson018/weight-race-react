import React, { useEffect } from 'react';
import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Counter } from "../Components/Counter";
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../Redux/Slices/usersSlice'

const Users = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])
    return (
        <div style={{ textAlign: "center" }}>
            <Typography variant="h6">
                Here you can view your progress and log new weights
            </Typography>
            <p>
                {useSelector((state) => state.users.loading)}
            </p>
            <Counter></Counter>
            <Outlet />
        </div>
    );
}

export default Users;