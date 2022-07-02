import React, {FC} from 'react';
import Card from "@mui/material/Card";
import {
    Box, Button,
    CardActionArea,
    CardActions,
    CardContent, Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import CakeIcon from "@mui/icons-material/Cake";
import {IUser} from "../../redux/types/userTypes";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {deleteFriendshipRequest} from "../../redux/actions/friendshipActions";
import {useNavigate} from "react-router-dom";


interface UserProps {
    user: IUser;
}

const User: FC<UserProps> = ({user}) => {
    const {friendsId, friends} = useTypedSelector(state => state.friendship);
    const {sendFriendshipRequest, deleteFriendship, deleteFriendshipRequest, getAllUserPosts, getFriendsRequest} = useActions();
    let navigate = useNavigate();

    const isFriendshipExists = friends.filter(friend => friend._id === user._id)

    const handleAction = (id: string) => {
        getAllUserPosts(id)
        getFriendsRequest(id)
        navigate(`/users/${id}`)
    }

    return (
        <Grid item minWidth={345}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={() => handleAction(user._id)}>
                    <Box sx={{position: 'relative', }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="120"
                            image="https://ae01.alicdn.com/kf/HTB1x3EJhVuWBuNjSspnq6x1NVXaa/-.jpg"
                        />
                        <Avatar
                            alt="User"
                            src={user.avatar}
                            sx={{ width: 120, height: 120, position: 'absolute', left: 0, right: 0, margin: 'auto',  top: '40px', border: '3px solid white'}}
                        />
                    </Box>
                    <CardContent sx={{pt: 5}}>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <AccountCircleIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={user.nickName} secondary={`${user.firstName} ${user.lastName}`} />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <EmailIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Email"  secondary={user.email}/>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <CakeIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Birthday" secondary={user.dateOfBirth}/>
                            </ListItem>
                        </List>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {
                        isFriendshipExists.length
                            ?
                            <Button
                                fullWidth
                                size="small"
                                color="error"
                                onClick={() => deleteFriendship(user._id)}
                            >
                                Cancel Friendship
                            </Button>
                            :
                            friendsId.includes(user._id)
                                ?
                                <Button
                                    fullWidth
                                    size="small"
                                    color="secondary"
                                    onClick={() => deleteFriendshipRequest(user._id)}
                                >
                                    Cancel Friendship Request
                                </Button>
                                :
                                <Button
                                    fullWidth
                                    size="small"
                                    color="primary"
                                    onClick={() => sendFriendshipRequest({
                                        to: user._id,
                                        content: "Friendship Request"
                                    })}
                                >
                                    Friendship Request
                                </Button>
                    }
                </CardActions>
            </Card>
        </Grid>
    );
};

export default User;