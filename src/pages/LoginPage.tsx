import React from 'react';
import {styled} from "@mui/material/styles";
// @ts-ignore
import SocialPic from '../assets/images/social_pic.png';
import LoginForm from "../components/forms/LoginForm";

const RootDiv = styled("div")({
    width: "100vw",
    height: "90vh",
    display: "flex",
    alignItems: "center",
});

const ImgDiv = styled("div")(({ theme }) => ({
    width: '35%',
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('md')]: {
        display: "none",
    },
}));

const MyImg = styled("img")({
    margin: "1rem",
    width: "100%",
    maxWidth: "350px",
    marginLeft: "auto",
});

const LoginPage = () => {
    return (
        <RootDiv>
            <ImgDiv>
                <MyImg src={SocialPic} alt="connections"/>
            </ImgDiv>
            <LoginForm/>
        </RootDiv>
    );
};

export default LoginPage;