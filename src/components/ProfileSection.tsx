import React from 'react';
import AboutMe from "./AboutMe";
import {Divider, Typography} from "@mui/material";
import PostsList from "./post/PostsList";

const ProfileSection = () => {
    return (
        <>
            <AboutMe/>
            <Divider />
            <Typography align='center' variant='h5' sx={{m: 2}}>My Posts</Typography>
            <PostsList/>
            <PostsList/>
            <PostsList/>
        </>
    );
};

export default ProfileSection;