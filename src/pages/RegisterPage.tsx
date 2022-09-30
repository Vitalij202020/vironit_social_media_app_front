import React from 'react';
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import RegisterForm from "../components/forms/RegisterForm";

const MyBox = styled(Box)({
    width: "100vw",
    height: "90vh",
    display: "flex",
    alignItems: "center",
});

const RegisterPage = () => {
    return (
        <MyBox>
            <RegisterForm/>
        </MyBox>
    );
};

export default RegisterPage;