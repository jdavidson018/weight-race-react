import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux'
import TablePagination from '@mui/material/TablePagination';
import { deleteActiveUserWeight } from '../../Redux/Slices/usersSlice';
import EditWeightDialog from './EditWeightDialog';
import { getDayOfWeekString } from '../../Data/utilityVariables';
import _ from 'lodash';

const WeightLog = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(7);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const dispatch = useDispatch();
    const activeUser = useSelector((state) => state.users.activeUser);

    const handleDelete = (row) => {
        dispatch(deleteActiveUserWeight(row));
    }


    let rows = _.cloneDeep(activeUser.weights);
    rows.reverse();

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Weight</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow
                                key={row.weightId}
                            >
                                <TableCell component="th" scope="row">
                                    {getDayOfWeekString(new Date(row.logDate)) + ', ' + new Date(row.logDate).toLocaleDateString()}
                                </TableCell>
                                <TableCell>{row.value}</TableCell>
                                <TableCell>
                                    <EditWeightDialog weight={row} />
                                    <IconButton onClick={() => handleDelete(row)} aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[7, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default WeightLog