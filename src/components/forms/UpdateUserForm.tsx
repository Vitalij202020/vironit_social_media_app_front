import React, {FormEvent, useState} from 'react';
import {Button, Container, TextField} from "@mui/material";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Progress from "./Progress";
import {useActions} from "../../hooks/useActions";

interface State {
    firstName: string;
    lastName: string;
    nickName: string;
    dateOfBirth: string;
    email: string;
    story: string;
}

const UpdateUserForm = () => {
    const {error, loading, success, user} = useTypedSelector(state => state.user)
    const {updateUser} = useActions()
    const [avatar, setAvatar] = useState('')
    const [values, setValues] = useState<State>({
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        nickName: user?.nickName || '',
        dateOfBirth: user?.dateOfBirth || '',
        email: user?.email || '',
        story: user?.story || '',
    });
    console.log("---onChange---", values.firstName)

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [prop]: event.target.value});
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('---info---', values)
        console.log('---avatar---', avatar)
        const formData = new FormData()
        formData.append('firstName', values.firstName)
        formData.append('lastName', values.lastName)
        formData.append('nickName', values.nickName)
        formData.append('dateOfBirth', values.dateOfBirth)
        formData.append('email', values.email)
        formData.append('story', values.story)
        formData.append('avatar', avatar)

        // @ts-ignore
        updateUser(formData)
    }

    return (
        <Container maxWidth='xs'>
            <Progress data={{loading, error, success}}/>
            <form noValidate autoComplete="off" onSubmit={(e) => onSubmit(e)}>
                <TextField
                    fullWidth
                    margin='dense'
                    label='First Name'
                    variant='outlined'
                    value={values.firstName}
                    onChange={handleChange('firstName')}
                />
                <TextField
                    margin='dense'
                    fullWidth
                    label='Last Name'
                    variant='outlined'
                    value={values.lastName}
                    onChange={handleChange('lastName')}
                />
                <TextField
                    margin='dense'
                    fullWidth
                    label='Nick Name'
                    variant='outlined'
                    value={values.nickName}
                    onChange={handleChange('nickName')}
                />
                <TextField
                    margin='dense'
                    fullWidth
                    label='Email'
                    variant='outlined'
                    value={values.email}
                    onChange={handleChange('email')}
                />
                <TextField
                    multiline
                    minRows={3}
                    margin='dense'
                    fullWidth
                    label='Story'
                    variant='outlined'
                    value={values.story}
                    onChange={handleChange('story')}
                />
                <TextField
                    margin='dense'
                    fullWidth
                    label='Date Of Birth'
                    variant='outlined'
                    type='date'
                    InputLabelProps={{shrink: true}}
                    value={values.dateOfBirth}
                    onChange={handleChange('dateOfBirth')}
                />
                <TextField
                    label='Profile Avatar'
                    margin='dense'
                    fullWidth
                    variant='outlined'
                    InputLabelProps={{shrink: true}}
                    type='file'
                    onChange={(e: any) => setAvatar(e.target.files[0])}
                />
                <Button
                    sx={{mt: 1}}
                    fullWidth
                    type="submit"
                    variant="contained"
                >
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default UpdateUserForm;