import React from 'react';
import Post from "./Post";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Typography} from "@mui/material";

const PostsList = () => {
    const {posts} = useTypedSelector(state => state.postList)

    return (
        <>
            {
                posts.length
                    ?
                    posts.map(post => (
                        <Post key={post._id} post={post}/>
                    ))
                    :
                    <Typography align='center' m={2}>No Posts Yet</Typography>
            }
        </>
    );
};

export default PostsList;