import React from 'react';
import Post from "./Post";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Typography} from "@mui/material";

const MyPostList = () => {
    const {myPosts} = useTypedSelector(state => state.post)

    return (
        <>
            {
                myPosts.length
                    ?
                    myPosts.map(post => (
                        <Post key={post._id} post={post}/>
                    ))
                    :
                    <Typography align='center' m={2}>No Posts Yet</Typography>
            }
        </>
    );
};

export default MyPostList;