import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {FC} from "react";
import {IPost} from "../../redux/types/postTypes";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Box, Divider} from "@mui/material";
import CommentsList from "../comment/CommentsList";
import CreateComment from "../comment/CreateComment";
import Progress from "../forms/Progress";

interface PostProps {
    post: IPost
}

const Post: FC<PostProps> = ({post}) => {
    const {user} = useTypedSelector(state => state.userLogin)
    const {likePost, unlikePost} = useActions();

    function likeHandle() {
        if(post.likes.includes(user?._id)) {
            unlikePost(post._id)
        } else {
            likePost(post._id)
        }
    }

    return (
        <Card sx={{mb: 2}}>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: red[500]}} aria-label="recipe" src={post.user.avatar}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title={post.title}
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                image={post.image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {post.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={likeHandle}>
                    <FavoriteIcon color={post.likes.includes(user?._id) ? 'error' : 'inherit'}/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon/>
                </IconButton>
            </CardActions>
            {/*<Divider variant='middle'/>*/}
            <CommentsList comments={post.comments}/>
            <CreateComment postId={post._id}/>
        </Card>
    );
};

export default Post;