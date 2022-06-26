import React, {FC} from 'react';
import {Avatar, Box, Grid, IconButton, Paper, Tooltip} from "@mui/material";
import {IComment} from "../../redux/types/commentTypes";
import CloseIcon from '@mui/icons-material/Close';

interface CommentProps {
    comment: IComment
}

const Comment: FC<CommentProps> = ({comment}) => {

    return (
        <Paper elevation={1} style={{ padding: "10px" }}>
            <Grid container wrap="nowrap" spacing={1}>
                <Grid item>
                    <Avatar alt="User" src={comment.postUserId.avatar}/>
                </Grid>
                <Grid justifyContent="left" item xs zeroMinWidth>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Box>
                            <h4 style={{ margin: 0, textAlign: "left" }}>{comment.postUserId.nickName}</h4>
                            <p style={{ textAlign: "left" }}>
                                {comment.content}
                            </p>
                            {/*<p style={{ textAlign: "left", color: "gray" }}>*/}
                            {/*    posted 1 minute ago*/}
                            {/*</p>*/}
                        </Box>
                        <Tooltip title="Delete">
                            <IconButton aria-label="delete" size="small" color='error'>
                                <CloseIcon fontSize='small'/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Comment;