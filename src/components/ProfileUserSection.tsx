import React from 'react';
import AboutUserInfo from "./AboutUserInfo";
import {Divider, Typography} from "@mui/material";
import UserPostList from "./post/UserPostList";

const ProfileUserSection = () => {
    return (
        <>
            <AboutUserInfo/>
            <Divider />
            <Typography align='center' variant='h5' sx={{m: 2}}>User Posts</Typography>
            <UserPostList/>
        </>
    );
};

export default ProfileUserSection;