import {
    Avatar, Button,
    Container,
    CssBaseline,
    FormControl,
    Grid, Icon,
    InputLabel,
    Select,
    TextField,
    Typography
} from '@mui/material';
import React, {useEffect} from 'react';
import {styled} from "@mui/material/styles";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import * as yup from "yup";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {IUserRegister} from "../../redux/types/userTypes";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Progress from "./Progress";
import {Link, useNavigate} from "react-router-dom";


const MyDiv = styled("div")(({theme}) => ({
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}));

const MyForm = styled("form")(({theme}) => ({
    width: "100%",
    marginTop: theme.spacing(3),
}));

const StyledAvatar = styled(Avatar)(({theme}) => ({
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
}));

const StyledButton = styled(Button)(({theme}) => ({
    margin: theme.spacing(3, 0, 2),
}));

const registerSchema = yup.object().shape({
    firstName: yup.string().min(2).max(20).required(),
    lastName: yup.string().min(2).max(20).required(),
    sex: yup.string().required(),
    dateOfBirth: yup.string().required(),
    nickName: yup.string().min(2).required(),
    email: yup.string().email().required(),
    password: yup.string().min(5).max(20).required(),
    confirmPassword: yup.string()
        .test('passwords-match', 'passwords must match', function (value) {
            return this.parent.password === value
        })
});


const RegisterForm = () => {
    const {error, loading, success} = useTypedSelector(state => state.userRegister)
    const {register} = useActions()
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            if (success) {
                navigate('/login')
            }
        }, 2000)
    }, [success])


    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<IUserRegister>({resolver: yupResolver(registerSchema)});

    const onSubmit: SubmitHandler<IUserRegister> = (data: IUserRegister) => {
        register(data)
    };

    return (
        <>
            <Container component="main" maxWidth="xs">
                <Progress data={{loading, error, success}}/>
                <MyDiv>
                    <StyledAvatar color={"black"}>
                        <LockOutlinedIcon/>
                    </StyledAvatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <MyForm onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    control={control}
                                    name="firstName"
                                    render={({field}) => (
                                        <TextField
                                            onChange={(e) => field.onChange(e)}
                                            value={field.value || ''}
                                            error={!!errors.firstName?.message}
                                            helperText={errors?.firstName?.message}
                                            variant="outlined"
                                            type="text"
                                            autoComplete="firstName"
                                            fullWidth
                                            label="First Name"
                                            autoFocus
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    control={control}
                                    name="lastName"
                                    render={({field}) => (
                                        <TextField
                                            onChange={(e) => field.onChange(e)}
                                            value={field.value || ''}
                                            error={!!errors.lastName?.message}
                                            helperText={errors?.lastName?.message}
                                            variant="outlined"
                                            type="text"
                                            autoComplete="lastName"
                                            label="Last Name"
                                            fullWidth
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel htmlFor="sex">Sex</InputLabel>
                                    <Controller
                                        control={control}
                                        name="sex"
                                        render={({field}) => (
                                            <Select
                                                required
                                                error={!!errors.sex?.message}
                                                native
                                                value={field.value || ''}
                                                onChange={(e) => field.onChange(e)}
                                                label="sex"
                                            >
                                                <option aria-label="None" value=""/>
                                                <option value={"male"}>Male</option>
                                                <option value={"female"}>Female</option>
                                                <option value={"other"}>Other</option>
                                            </Select>
                                        )}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    control={control}
                                    name="dateOfBirth"
                                    render={({field}) => (
                                        <TextField
                                            onChange={(e) => field.onChange(e)}
                                            value={field.value || ''}
                                            error={!!errors.dateOfBirth?.message}
                                            helperText={errors?.dateOfBirth?.message}
                                            variant="outlined"
                                            type="date"
                                            label="Date"
                                            InputLabelProps={{shrink: true}}
                                            fullWidth
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    control={control}
                                    name="nickName"
                                    render={({field}) => (
                                        <TextField
                                            label="Nick Name"
                                            onChange={(e) => field.onChange(e)}
                                            value={field.value || ''}
                                            fullWidth
                                            error={!!errors.nickName?.message}
                                            helperText={errors?.nickName?.message}
                                            variant="outlined"
                                            type="text"
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    control={control}
                                    name="email"
                                    render={({field}) => (
                                        <TextField
                                            label="Email Address"
                                            onChange={(e) => field.onChange(e)}
                                            value={field.value || ''}
                                            fullWidth
                                            error={!!errors.email?.message}
                                            helperText={errors?.email?.message}
                                            variant="outlined"
                                            type="text"
                                            autoComplete="email"
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    control={control}
                                    name="password"
                                    render={({field}) => (
                                        <TextField
                                            label="Password"
                                            onChange={(e) => field.onChange(e)}
                                            value={field.value || ''}
                                            fullWidth
                                            error={!!errors.password?.message}
                                            helperText={errors?.password?.message}
                                            variant="outlined"
                                            type="password"
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    control={control}
                                    name="confirmPassword"
                                    render={({field}) => (
                                        <TextField
                                            label="Confirm Password"
                                            onChange={(e) => field.onChange(e)}
                                            value={field.value || ''}
                                            fullWidth
                                            error={!!errors.confirmPassword?.message}
                                            helperText={errors?.confirmPassword?.message}
                                            variant="outlined"
                                            type="password"
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                        <StyledButton variant="contained" fullWidth type="submit">Submit</StyledButton>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link to="/login">Already have an account? Login</Link>
                            </Grid>
                        </Grid>
                    </MyForm>
                </MyDiv>
            </Container>
        </>
    );
};

export default RegisterForm;