import React, {useState} from 'react';
import {
    Avatar,
    Box,
    CardActionArea,
    Divider,
    ListItem,
    ListItemAvatar,
    ListItemText,
    TextField,
    Typography
} from "@mui/material";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const UsersBlock = () => {
    const {searchResult} = useTypedSelector(state => state.user)
    const [search, setSearch] = useState('');
    const {getAllUsersSearch, getMessages} = useActions();

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        getAllUsersSearch(search)
        setSearch('')
        console.log('working....', search)
    }

    return (
        <>
            <form noValidate autoComplete="off" onSubmit={(e) => onSubmit(e)}>
                <TextField
                    id="standard-textarea"
                    label="Search Someone"
                    placeholder="Enter Nick Name"
                    variant="standard"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    fullWidth
                    sx={{mb: 1}}
                />
            </form>
            {
                searchResult.map(user => (
                    <Box key={user._id}>
                        <CardActionArea onClick={() => getMessages(user._id)}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Friend"
                                            src={user.avatar}/>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={user.nickName}
                                    secondary={
                                        <Typography
                                            sx={{display: 'inline'}}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {`${user.firstName} ${user.lastName}`}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset"/>
                        </CardActionArea>
                    </Box>
                ))
            }
        </>
    );
};

export default UsersBlock;