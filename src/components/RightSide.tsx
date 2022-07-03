import React from 'react';
import {Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Post from "./post/Post";

const RightSide = () => {
    const {friends} = useTypedSelector(state => state.friendship)

    return (
        <>
            <Typography align='center' sx={{m: 1}}>Friends List</Typography>
            <Divider/>
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                {
                    friends.length
                        ?
                        friends.map(friend => (
                            <Box key={friend._id}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Friend" src={friend.avatar}/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={friend.nickName}
                                        secondary={
                                            <>
                                                <Typography
                                                    sx={{display: 'inline'}}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {`${friend.firstName} ${friend.lastName}`}
                                                </Typography>
                                                {` — ${friend.story}`}
                                            </>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li"/>
                            </Box>
                        ))
                        :
                        <Typography align='center' m={2}>No Friends Yet</Typography>
                }
            </List>
        </>
    );
};

export default RightSide;