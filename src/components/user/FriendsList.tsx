import React, {useEffect} from 'react';
import {Grid, Typography} from "@mui/material";
import User from "./User";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const FriendsList = () => {
    const {friends} = useTypedSelector(state => state.friendship)
    const {token, user} = useTypedSelector(state => state.user);
    const {userFlag, notificationFlag} = useTypedSelector(state => state.global);
    const {getSentFriendRequests, getFriendsRequest, getNotifications} = useActions();

    useEffect(() => {
        if(token) {
            getFriendsRequest(user?._id as string)
            getSentFriendRequests()
            getNotifications()
        }
    }, [token, userFlag, notificationFlag])

    return (
        <>
            {
                !friends.length && <Typography variant='h5' align='center' m={5}>No Friends Yet</Typography>
            }
            <Grid container spacing={3} justifyContent={"center"} alignItems={"center"}>
                {
                    friends.length
                        ?
                        friends.map(user => (
                            <User key={user._id} user={user}/>
                        ))
                        :
                        null
                }
            </Grid>
        </>
    );
};

export default FriendsList;