import React, {FC, FormEvent, useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {TextField, Typography} from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {style} from "../post/CreatePost";

interface UpdatePostFormProps {
    open: boolean;
    onClose: () => void;
}

const UpdatePostForm: FC<UpdatePostFormProps> = ({open, onClose}) => {
    const {postForUpdate} = useTypedSelector(state => state.post)
    const [title, setTitle] = React.useState( '');
    const [description, setDescription] = React.useState('');
    const [image, setImage] = React.useState( '');
    const {updatePost} = useActions();

    useEffect(() => {
        console.log('------------render ----useEffect------>>>')
        setTitle(postForUpdate?.title || '')
        setDescription(postForUpdate?.description || '')
    }, [postForUpdate])

    console.log("UpdatePostForm -> ", title, description)
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('_id', postForUpdate?._id as string)
        formData.append('title', title)
        formData.append('description', description)
        formData.append('image', image)
        // @ts-ignore
        updatePost(formData)
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
            >
                <Box sx={style}>
                    <Typography align='center' variant="h6" component="h2" sx={{color: '#616161'}}>
                        Please Fill This Form For Update
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
                            label='Profile Avatar'
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
    )
};

export default UpdatePostForm;