import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
import LeftSide from "../components/LeftSide";
import PostsList from "../components/PostsList";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const HomePage = () => {
    return (
        <Container maxWidth={"xl"}>
            <Grid container spacing={2} mt={9}>
                <Grid item  md={2.5} sx={{display: {xs: 'none', md: 'block'}}}>
                    <Item>
                        <LeftSide/>
                        <LeftSide/>
                    </Item>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Item>Middle
                        <PostsList/>
                        <PostsList/>
                        <PostsList/>
                    </Item>
                </Grid>
                <Grid item  md={2.5} sx={{display: {xs: 'none', md: 'block'}}}>
                    <Item>Right
                        Some Place
                    </Item>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomePage;