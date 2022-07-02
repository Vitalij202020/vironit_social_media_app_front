import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
    Avatar,
    Box,
    Divider,
} from "@mui/material";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useParams} from "react-router-dom";
import UserInfo from "./UserInfo";

const AboutUserInfo = () => {
    const {users} = useTypedSelector(state => state.user)
    let { userId } = useParams();
    const user = users.filter((item) => item._id === userId)[0]

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
                    Lizard
                </Typography>
                <Typography align='center' variant="body2" color="text.secondary">
                    "Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica"
                </Typography>
                <Divider sx={{m: 2}}>More Info</Divider>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <UserInfo user={user}/>
                </Box>
            </CardContent>
        </Card>
    );
};

export default AboutUserInfo;