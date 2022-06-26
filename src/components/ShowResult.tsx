import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ShowResult() {
    const {success, error, msg, status} = useTypedSelector(state => state.global);

    const {globalShowStatusActionOff, globalClearFields} = useActions();
    console.log('---showResult---', status)

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        globalShowStatusActionOff();
        globalClearFields();
    };

    return (
        <>
            <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'right'}} open={status} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={success ? "success" : "error"} sx={{ width: '100%' }}>
                    {msg}
                </Alert>
            </Snackbar>
        </>
    );
}
