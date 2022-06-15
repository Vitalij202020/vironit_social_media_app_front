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
import UserInfo from "./UserInfo";

const AboutMe = () => {
    const [open, setOpen] = React.useState(false);

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
                    src="https://alexeykrol.com/wp-content/uploads/2018/12/karolyn-fox-foto.1024x1024.jpg"
                    sx={{ width: 150, height: 150, position: 'absolute', left: 0, right: 0, margin: 'auto',  top: '150px', border: '3px solid white'}}
                />
            </Box>
            <CardContent sx={{mt: 2}}>
                <Typography mt={2} align='center' gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography align='center' variant="body2" color="text.secondary">
                    "Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica"
                </Typography>
                <Divider sx={{m: 2}}>More Info</Divider>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <UserInfo/>
                </Box>
            </CardContent>
            <Box sx={{ width: '100%' }}>
                <Collapse in={open}>
                    <Alert
                        severity='info'
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
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
                <Button onClick={() => {setOpen(true)}} disabled={open} size="large" startIcon={<EditIcon />}>Edit</Button>
            </CardActions>
        </Card>
    );
};

export default AboutMe;