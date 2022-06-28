import React from 'react';
import {Box, Button, Paper, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
        }}>
            <Paper elevation={9}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    m: 8
                }}>
                    <Typography variant="h1">404</Typography>
                    <Typography variant="h4">Sorry Page Not Found!</Typography>
                    <Button sx={{mt: 2}} onClick={() => navigate('/')}>Go To Home</Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default NotFound;