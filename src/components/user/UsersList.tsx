import React, {useEffect} from 'react';
import {Grid, Typography} from "@mui/material";
import User from "./User";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const UsersList = () => {
    const {users, user} = useTypedSelector(state => state.user)
    const {token} = useTypedSelector(state => state.user);
    const {userFlag, notificationFlag} = useTypedSelector(state => state.global);
    const {getAllUsers, getSentFriendRequests, getFriendsRequest, getNotifications} = useActions();

    useEffect(() => {
        if(token) {
            getAllUsers()
            getFriendsRequest(user?._id as string)
            getSentFriendRequests()
            getNotifications()
        }
    }, [token, userFlag, notificationFlag])

    return (
        <>
            {
                !users.length && <Typography variant='h5' align='center' m={5}>No Users Yet</Typography>
            }
            <Grid container spacing={3} justifyContent={"center"} alignItems={"center"}>
                {
                    users.length
                        ?
                        users.map(user => (
                            <User key={user._id} user={user}/>
                        ))
                        :
                        null
                }
            </Grid>
        </>
    );
};

export default UsersList;