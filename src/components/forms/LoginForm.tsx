import React, {FC, useEffect} from 'react';
import {
    Avatar,
    Button,
    Container,
    Grid,
    LinearProgress,
    TextField,
    Typography
} from "@mui/material";
import {styled} from "@mui/material/styles";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {IUserLogin} from "../../redux/types/userTypes";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Progress from "./Progress";
import {Link, useNavigate} from "react-router-dom";


const MyDiv = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}));

const MyForm = styled("form")(({ theme }) => ({
    width: "100%",
    marginTop: theme.spacing(1),
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
}));

const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(5).max(20).required(),
});

const LoginForm: FC = () => {
    const {loading, error, success} = useTypedSelector(state => state.user)
    const {login} = useActions()
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            if (success) {
                navigate('/')
            }
        }, 2500)
    }, [success])

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IUserLogin>({resolver: yupResolver(loginSchema)});

    const onSubmit: SubmitHandler<IUserLogin> = (data: IUserLogin) => {
        console.log(data);
        login(data)
    };

    return (
        <Container component="main" maxWidth="xs">
            <Progress data={{loading, error, success}}/>
            <MyDiv>
                <StyledAvatar>
                    <LockOutlinedIcon />
                </StyledAvatar>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <LinearProgress/>
                <MyForm onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field }) => (
                            <TextField
                                label="Email Address"
                                onChange={(e) => field.onChange(e)}
                                value={field.value || ''}
                                fullWidth
                                error={!!errors.email?.message}
                                helperText={ errors?.email?.message }
                                variant="outlined"
                                margin="normal"
                                autoFocus
                                type="text"
                                autoComplete="email"
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="password"
                        render={({ field }) => (
                            <TextField
                                label="Password"
                                onChange={(e) => field.onChange(e)}
                                value={field.value || ''}
                                fullWidth
                                error={!!errors.password?.message}
                                helperText={ errors?.password?.message }
                                variant="outlined"
                                margin="normal"
                                type="password"
                            />
                        )}
                    />
                    <Button fullWidth variant="contained" type="submit" sx={{m: "16px 0", float: "right"}}>Login</Button>
                    <Grid container justifyContent={"center"}>
                        <Grid item>
                            <Link to="/register">Don't have an account? Register</Link>
                        </Grid>
                    </Grid>
                </MyForm>
            </MyDiv>
        </Container>
    );
};

export default LoginForm;