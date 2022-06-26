import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
import LeftSide from "../components/LeftSide";
import Header from "../components/Header";
import {Outlet} from "react-router-dom";
import RightSide from "../components/RightSide";
import ShowResult from "../components/ShowResult";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const MainPage = () => {
    return (
        <>
            <Header/>
            <ShowResult/>
            <Container maxWidth={"xl"}>
                <Grid container spacing={2} mt={9}>
                    <Grid item  md={2.5} sx={{display: {xs: 'none', md: 'block'}}}>
                        <Item>
                            <LeftSide/>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Item>
                            <Outlet/>
                        </Item>
                    </Grid>
                    <Grid item  md={2.5} sx={{display: {xs: 'none', md: 'block'}}}>
                        <Item>
                            <RightSide/>
                        </Item>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default MainPage;