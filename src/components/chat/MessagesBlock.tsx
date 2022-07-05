import React, {useState} from 'react';
import {Avatar, Box, Button, TextField, Typography} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import moment from "moment";
import {useActions} from "../../hooks/useActions";

const MessagesBlock = () => {
    const [text, setText] = useState('');
    const {messages} = useTypedSelector(state => state.message);
    const {user} = useTypedSelector(state => state.user);
    const {createMessage} = useActions();

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        createMessage({
            sender: user?._id as string,
            recipient: messages[0].recipient._id === user?._id ? messages[0].sender._id : messages[0].recipient._id,
            message: text
        })
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
                            key={message._id}
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