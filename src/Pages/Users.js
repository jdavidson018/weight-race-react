import React, { useEffect } from 'react';
import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../Redux/Slices/usersSlice'

const Users = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])
    return (
        <div style={{ textAlign: "center" }}>
            <Typography variant="h6">
                Welcome to your Personal Dashboard
            </Typography>
            <Outlet />
        </div>
    );
}

export default Users;