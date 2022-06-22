import React, {FC} from 'react';
import {Alert, AlertTitle, LinearProgress, Slide, Stack} from "@mui/material";


interface ProgressProps {
    data: {
        loading: boolean;
        error: string;
        success: string;
    }
}

const Progress: FC<ProgressProps> = ({data: {loading, success, error}}) => {

    return (
        <Stack sx={{width: '100%'}}>
            {loading && <LinearProgress sx={{mb: 2}}/>}
            {error &&
                <Slide direction="left" in={!!error}>
                    <Alert severity="error" sx={{mb: 2}}>
                        <AlertTitle>Error</AlertTitle>
                        {error}
                    </Alert>
                </Slide>
            }
            {success &&
                <Slide direction="left" in={!!success}>
                    <Alert severity="success" sx={{mb: 2}}>
                        <AlertTitle>Success</AlertTitle>
                        {success}
                    </Alert>
                </Slide>
            }
        </Stack>
    );
};

export default Progress;