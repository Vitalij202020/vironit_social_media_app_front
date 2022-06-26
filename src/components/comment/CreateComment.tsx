import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DirectionsIcon from '@mui/icons-material/Directions';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import {FC, FormEvent, useState} from "react";
import {Avatar} from "@mui/material";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

interface CreateCommentProps {
    postId: string
}

const CreateComment: FC<CreateCommentProps> = ({postId}) => {
    const {user} = useTypedSelector(state => state.userLogin);
    const {commentInput} = useTypedSelector(state => state.comment);
    const {createComment, commentInputOnchange} = useActions();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('submeet', commentInput)
        createComment({content: commentInput, postId, postUserId: user?._id as string })
        commentInputOnchange('')
    }

    return (
        <Paper
            onSubmit={handleSubmit}
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
        >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <Avatar alt="User" src={user?.avatar} sx={{ width: 24, height: 24 }}/>
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Comment.."
                inputProps={{ 'aria-label': 'Write Comment' }}
                onChange={(e) => commentInputOnchange(e.target.value)}
                value={commentInput}
            />
            <IconButton sx={{ p: '10px' }} aria-label="search">
                <SentimentSatisfiedAltIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="submit" color="primary" sx={{ p: '10px' }} aria-label="enter">
                <DirectionsIcon />
            </IconButton>
        </Paper>
    );
};

export default CreateComment;