import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useTypedSelector} from "../hooks/useTypedSelector";

const UserInfo = () => {
    const {user} = useTypedSelector(state => state.userLogin)

    const rows = [
        createData('First Name', user?.firstName || ''),
        createData('Last Name', user?.lastName || ''),
        createData('Nick Name', user?.nickName || ''),
        createData('Email', user?.email || ''),
        createData('Date Of Birth', user?.dateOfBirth || ''),
    ];

    function createData(
        info: string,
        data: string,
    ) {
        return { info, data };
    }

    return (
        <TableContainer elevation={1} sx={{maxWidth: '500px'}} component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>User Info</TableCell>
                        <TableCell align="right">Data</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.info}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.info}
                            </TableCell>
                            <TableCell align="right">{row.data}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UserInfo;
