import React, {FC} from 'react';
import {Avatar, Box, Grid, IconButton, Paper, Tooltip} from "@mui/material";
import {IComment} from "../../redux/types/commentTypes";
import CloseIcon from '@mui/icons-material/Close';
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import moment from "moment";

interface CommentProps {
    comment: IComment
}

const Comment: FC<CommentProps> = ({comment}) => {
    const {user} = useTypedSelector(state => state.user);
    const {deleteComment} = useActions();

    return (
        <Paper elevation={1} style={{ padding: "10px" }}>
            <Grid container wrap="nowrap" spacing={1}>
                <Grid item>
                    <Avatar alt="User" src={comment.user.avatar}/>
                </Grid>
                <Grid justifyContent="left" item xs zeroMinWidth>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Box>
                            <h4 style={{ margin: 0, textAlign: "left" }}>{comment.user.nickName}</h4>
                            <p style={{ textAlign: "left" }}>
                                {comment.content}
                            </p>
                            <p style={{ textAlign: "left", color: "gray" }}>{moment(comment.createdAt).fromNow()}</p>
                        </Box>
                        {
                            user?._id === comment.user._id
                                ?
                                <Tooltip title="Delete">
                                    <IconButton
                                        aria-label="delete"
                                        size="small"
                                        color='error'
                                        onClick={() => deleteComment(comment._id)}
                                    >
                                        <CloseIcon fontSize='small'/>
                                    </IconButton>
                                </Tooltip>
                                :
                                null
                        }

                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Comment;