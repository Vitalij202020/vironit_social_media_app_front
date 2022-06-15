import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    info: string,
    data: string,
) {
    return { info, data };
}

const rows = [
    createData('First Name', 'Vitali'),
    createData('Last Name', 'Vasko'),
    createData('Nick Name', 'Vital'),
    createData('Email', 'vitali@test.com'),
    createData('Date Of Birth', '22-12-2021'),
];

const UserInfo = () => {
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
