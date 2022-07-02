import React, {FC} from 'react';
import {Avatar, Box, Button, ButtonGroup, Divider, Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {INotification} from "../../redux/types/notificationTypes";
import {useActions} from "../../hooks/useActions";

interface NotificationProps {
    notification: INotification
}

const MyDiv = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 600,
}));

const Notification: FC<NotificationProps> = ({notification}) => {
    const {deleteFriendshipRequest, acceptFriendshipRequest} = useActions();

    return (
        <Grid item xs={12} sm={6}>
            <MyDiv>
                <Typography sx={{m: 1}}>{notification.content}</Typography>
                <Divider>From</Divider>
                <Box sx={{
                    m: '15px 0',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Avatar alt="Remy Sharp" src={notification.from?.avatar}/>
                    <Typography sx={{ml: 2}}>
                        {`${notification.from?.firstName} ${notification.from?.lastName} - ${notification.from?.nickName}`}
                    </Typography>
                </Box>
                <ButtonGroup variant="text" fullWidth>
                    <Button onClick={() => deleteFriendshipRequest(notification.from?._id as string)} color='error'>Disagree</Button>
                    <Button onClick={() => acceptFriendshipRequest(notification.from?._id as string)} color='success'>Agree</Button>
                </ButtonGroup>
            </MyDiv>
        </Grid>
    );
};

export default Notification;