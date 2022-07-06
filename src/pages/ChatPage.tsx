import React, {useEffect, useRef} from 'react';
import Header from "../components/Header";
import ShowResult from "../components/ShowResult";
import {Container} from "@mui/material";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import UsersBlock from "../components/chat/UsersBlock";
import MessagesBlock from "../components/chat/MessagesBlock";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
    [theme.breakpoints.up('md')]: {
        minHeight: '85vh',
    },
}));

const ChatPage = () => {
    return (
        <>
            <Header/>
            <ShowResult/>
            <Container maxWidth={"lg"}>
                <Grid container spacing={2} mt={9}>
                    <Grid item xs={12} md={4}>
                        <Item elevation={1}>
                            <UsersBlock/>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Item sx={{height: '100%'}} elevation={1}>
                            <MessagesBlock/>
                        </Item>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default ChatPage;