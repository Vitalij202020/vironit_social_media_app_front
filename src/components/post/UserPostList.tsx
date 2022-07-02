import React from 'react';
import Post from "./Post";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Typography} from "@mui/material";

const UserPostList = () => {
    const {userPosts} = useTypedSelector(state => state.post)

    return (
        <>
            {
                userPosts.length
                    ?
                    userPosts.map(post => (
                        <Post key={post._id} post={post}/>
                    ))
                    :
                    <Typography align='center' m={2}>No Posts Yet</Typography>
            }
        </>
    );
};

export default UserPostList;