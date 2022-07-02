import React, {useEffect} from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Notification from "./Notification";
import {useActions} from "../../hooks/useActions";

const NotificationList = () => {
    const {notifications} = useTypedSelector(state => state.notification)
    const {token} = useTypedSelector(state => state.user);
    const {notificationFlag} = useTypedSelector(state => state.global);
    const {getNotifications} = useActions();

    useEffect(() => {
        if(token) {
            getNotifications()
        }
    }, [token, notificationFlag])

    return (
        <Container>
            {
                !notifications.length && <Typography variant='h5' align='center' m={5}>You Don't Have A Notification Yet</Typography>
            }
            <Grid container spacing={2}>
                {
                    notifications.length
                        ?
                        notifications.map(notification => (
                            <Notification key={notification._id} notification={notification}/>
                        ))
                        :
                        null
                }
            </Grid>
        </Container>
    );
};

export default NotificationList;