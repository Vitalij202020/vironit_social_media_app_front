import React, {FC} from 'react';
import Comment from "./Comment";
import {Box, Container, Stack} from "@mui/material";
import {IComment} from "../../redux/types/commentTypes";

interface CommentsListProps {
    comments: IComment[]
}

const CommentsList: FC<CommentsListProps> = ({comments}) => {
    return (
        <Container>
            <Box sx={{
                background: '#fafafa',
                mb: '15px',
                p: '35px',
                borderRadius: '10px',
                display: comments.length ? 'block' : 'none',
                maxHeight: '370px',
                overflowY: comments.length > 5 ? 'scroll' : ''
            }}>
                <Stack spacing={1}>
                    {comments.map(comment => (
                        <Comment key={comment._id} comment={comment}/>
                    ))}
                </Stack>
            </Box>
        </Container>
    );
};

export default CommentsList;