import {Container, Divider, Paper, TextField, Typography} from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {FormEvent} from "react";
import {useActions} from "../../hooks/useActions";
import Progress from "../forms/Progress";
import {useTypedSelector} from "../../hooks/useTypedSelector";

export const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #9e9e9e',
    borderRadius: '7px',
    boxShadow: 24,
    p: 4,
};

const CreatePost = () => {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [image, setImage] = React.useState('');

    const {createPost} = useActions();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('image', image)
        // @ts-ignore
        createPost(formData)
        setOpen(false)
        setTitle('')
        setDescription('')
    }

    return (
        <Container>
            <Paper elevation={2} sx={{m: '15px 0 20px 0', color: '#616161'}}>
                <Typography align='center' sx={{p: 2}}>
                    Write what's in your mind...
                </Typography>
                <Divider variant='middle'/>
                <TextField
                    sx={{p: 2}}
                    variant='standard'
                    fullWidth
                    placeholder="Type Here..."
                    onClick={handleOpen}/>
            </Paper>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Box sx={style}>
                        <Typography align='center' variant="h6" component="h2" sx={{color: '#616161'}}>
                            Please Fill This Form
                        </Typography>
                        {/*<Progress data={{loading, error, success}}/>*/}
                        <form noValidate autoComplete="off" onSubmit={(e) => onSubmit(e)}>
                            <TextField
                                margin='dense'
                                fullWidth
                                label='Title'
                                variant='outlined'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <TextField
                                multiline
                                minRows={3}
                                margin='dense'
                                fullWidth
                                label='Description'
                                variant='outlined'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}

                            />
                            <TextField
                                label='Post Image'
                                margin='dense'
                                fullWidth
                                variant='outlined'
                                InputLabelProps={{shrink: true}}
                                type='file'
                                onChange={(e: any) => setImage(e.target.files[0])}
                            />
                            <Button
                                sx={{mt: 1}}
                                fullWidth
                                type="submit"
                                variant="contained"
                            >
                                Submit
                            </Button>
                        </form>
                    </Box>
                </Modal>
            </div>
        </Container>
    );
};

export default CreatePost;