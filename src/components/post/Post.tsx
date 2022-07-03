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
import CommentsList from "../comment/CommentsList";
import CreateComment from "../comment/CreateComment";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import UpdatePostForm from "../forms/UpdatePostForm";
import moment from "moment";

interface PostProps {
    post: IPost
}

const Post: FC<PostProps> = ({post}) => {
    const [open, setOpen] = React.useState(false);
    const {user} = useTypedSelector(state => state.user)
    const {likePost, unlikePost, deletePost, postForUpdate} = useActions();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);

    function likeHandle() {
        if(post.likes.includes(user?._id)) {
            unlikePost(post._id)
        } else {
            likePost(post._id)
        }
    }

    const handleClose = () => setOpen(false);

    const onEdit = () => {
        postForUpdate(post)
        setAnchorEl(null);
        setOpen(true)
    }

    const handlePostMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = () => {
        setAnchorEl(null);
        deletePost(post._id)
    };

    const menuId = 'primary-post-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={onEdit}>Edit</MenuItem>
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
    );


    return (
        <>
            <UpdatePostForm open={open} onClose={handleClose}/>
            <Card sx={{mb: 2}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{bgcolor: red[500]}} aria-label="recipe" src={post.user.avatar}>
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton
                            aria-label="settings"
                            aria-controls={menuId}
                            onClick={handlePostMenuOpen}
                            disabled={post.user._id !== user?._id}
                        >
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title={post.title}
                    subheader={moment(post.createdAt).fromNow()}
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
                <CreateComment postId={post._id} postUserId={post.user._id}/>
                {renderMenu}
            </Card>
        </>
    );
};

export default Post;