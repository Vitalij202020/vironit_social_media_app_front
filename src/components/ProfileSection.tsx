import React, {useEffect} from 'react';
import AboutMe from "./AboutMe";
import {Divider, Typography} from "@mui/material";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import MyPostList from "./post/MyPostList";

const ProfileSection = () => {
    const {token} = useTypedSelector(state => state.user);
    const {flag} = useTypedSelector(state => state.global);

    const {getAllMyPosts}= useActions();

    useEffect(() => {
        if(token) {
            getAllMyPosts()
        }
    }, [token, flag])

    return (
        <>
            <AboutMe/>
            <Divider />
            <Typography align='center' variant='h5' sx={{m: 2}}>My Posts</Typography>
            <MyPostList/>
        </>
    );
};

export default ProfileSection;