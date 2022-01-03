import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { NavLink, Outlet } from "react-router-dom";
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UserService from '../Services/UserService';

const drawerWidth = 240;

export default function NavigationDrawer() {
    //let users = getUsers();
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        UserService.getUsers().then((users) => {
            setUsers(users);
            setIsLoading(false);
        });
    }, [])

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        WeightRace
                    </Typography>
                    <Typography variant="h6" component="div" style={{ textAlign: "right", paddingRight: "5%" }} sx={{ flexGrow: 1 }}>
                        Ryan... you look chubby today.
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Users</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {isLoading && (
                                    <h1>Loading...</h1>
                                )}
                                {!isLoading && users.map(user => (
                                    <NavLink
                                        style={({ isActive }) => {
                                            return {
                                                display: "block",
                                                margin: "1rem 0",
                                                color: isActive ? "red" : ""
                                            };
                                        }}
                                        to={`/users/${user.userId}`}
                                        key={user.userId}
                                    >
                                        {user.firstName + " " + user.lastName}
                                    </NavLink>
                                ))}
                            </AccordionDetails>
                        </Accordion>
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}