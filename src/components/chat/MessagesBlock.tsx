import React, {useEffect, useRef, useState} from 'react';
import {Avatar, Box, Button, TextField, Typography} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import moment from "moment";
import {useActions} from "../../hooks/useActions";
import {io} from "socket.io-client";
import {IMessage} from "../../redux/types/messageTypes";
import { v4 as uuidv4 } from 'uuid';

const MessagesBlock = () => {
    const [text, setText] = useState('');
    const {messages, recipient, currentMessage} = useTypedSelector(state => state.message);
    const {user} = useTypedSelector(state => state.user);
    const {createMessage, messageAdd} = useActions();
    const socket = useRef<any>();

    // Connect to Socket.io
    useEffect(() => {
        socket.current = io("ws://localhost:8800");
        socket.current.emit("addUser", user?._id);
        socket.current.on("getUsers", (users: any) => {
            console.log('usersOnline--->>>', users)
        });
    }, [user]);

    // Send Message to socket server
    useEffect(() => {
        if (currentMessage !== null) {
            socket.current.emit("sendMessage", currentMessage);
        }
    }, [currentMessage]);


    // Get the message from socket server
    useEffect(() => {
        socket.current.on("receiveMessage", (message: IMessage) => {
                messageAdd(message)
            }
        );
    }, [currentMessage]);

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const newMessage = {
            sender: user?._id as string,
            recipient: recipient?._id as string,
            message: text
        }
        createMessage(newMessage)
        setText('')
    }

    return (
        <Box sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
        }}>
            <Box sx={{ overflowY: 'scroll', paddingRight: '10px'}}>
                {!!!messages.length && <Typography variant='h5' align='center' m={5}>No Conversations Yet</Typography>}
                {
                    !!messages.length && messages.map(message => (
                        <Box
                            key={uuidv4()}
                            sx={{display: 'flex',
                                flexDirection: 'column',
                                mt: '20px',
                                alignItems: message.sender._id === user?._id ? 'flex-end' : 'flex-start'
                        }}>
                            <Box sx={{display: 'flex'}}>
                                <Avatar
                                    sx={{mr: 1}} alt="User"
                                    src={message.sender.avatar}
                                />
                                <Typography sx={{
                                    padding: '10px',
                                    borderRadius: '20px',
                                    backgroundColor: message.sender._id === user?._id ? '#2196f3' : 'rgb(245, 241, 241)',
                                    color: message.sender._id === user?._id ? 'white' : 'black',
                                    maxWidth: '300px',
                                }}>{message.message}</Typography>
                            </Box>
                            <Box>
                                <Typography>{moment(message.createdAt).fromNow()}</Typography>
                            </Box>
                        </Box>
                    ))
                }
            </Box>
            <Box>
                <form noValidate autoComplete="off" onSubmit={(e) => onSubmit(e)}>
                    <TextField
                        multiline
                        minRows={3}
                        margin='dense'
                        fullWidth
                        label='Write Something..'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        variant='outlined'/>
                    <Button
                        variant="contained"
                        endIcon={<SendIcon/>}
                        type="submit"
                        fullWidth
                    >
                        Send Message
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default MessagesBlock;