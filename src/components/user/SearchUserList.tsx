import React, {useEffect} from 'react';
import {Grid, Typography} from "@mui/material";
import User from "./User";
import {useTypedSelector} from "../../hooks/useTypedSelector";


const SearchUsersList = () => {
    const {searchResult} = useTypedSelector(state => state.user);

    return (
        <>
            {
                !searchResult.length && <Typography variant='h5' align='center' m={5}>No Users For Your Request!</Typography>
            }
            <Grid container spacing={3} justifyContent={"center"} alignItems={"center"}>
                {
                    searchResult.length
                        ?
                        searchResult.map(user => (
                            <User key={user._id} user={user}/>
                        ))
                        :
                        null
                }
            </Grid>
        </>
    );
};

export default SearchUsersList;