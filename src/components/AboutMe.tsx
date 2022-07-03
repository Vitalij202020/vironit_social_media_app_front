import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
    Avatar,
    Box,
    Collapse,
    Divider,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import UpdateUserForm from "./forms/UpdateUserForm";
import MyInfo from "./MyInfo";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {useEffect} from "react";

const AboutMe = () => {
    const {success, showEditForm, user} = useTypedSelector(state => state.user)
    const {showEditFormOn, showEditFormOff} = useActions()

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                showEditFormOff()
                window.scrollTo(0, 0)
            }, 2000)
        }
    }, [success])

    return (
        <Card >
            <Box sx={{position: 'relative', }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="250"
                    image="https://catherineasquithgallery.com/uploads/posts/2021-02/1612704920_74-p-zelenii-fon-park-162.jpg"
                />
                <Avatar
                    alt="Remy Sharp"
                    src={user?.avatar}
                    sx={{ width: 150, height: 150, position: 'absolute', left: 0, right: 0, margin: 'auto',  top: '150px', border: '3px solid white'}}
                />
            </Box>
            <CardContent sx={{mt: 2}}>
                <Typography mt={2} align='center' gutterBottom variant="h5" component="div">
                    {user?.nickName}
                </Typography>
                <Typography align='center' variant="body2" color="text.secondary">
                    {user?.story}
                </Typography>
                <Divider sx={{m: 2}}>More Info</Divider>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <MyInfo/>
                </Box>
            </CardContent>
            <Box sx={{ width: '100%' }}>
                <Collapse in={showEditForm}>
                    <Alert
                        severity='info'
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {showEditFormOff()}}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        Close Edit Form!
                    </Alert>
                    <UpdateUserForm/>
                </Collapse>
            </Box>
            <CardActions sx={{justifyContent: 'right'}}>
                <Button onClick={() => {showEditFormOn()}} disabled={showEditForm} size="large" startIcon={<EditIcon />}>Edit</Button>
            </CardActions>
        </Card>
    );
};

export default AboutMe;