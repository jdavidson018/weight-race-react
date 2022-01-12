import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import WeightInputForm from '../WeightInputForm';
import PropTypes from 'prop-types';

const EditWeightDialog = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <IconButton onClick={handleClickOpen} aria-label="edit">
                <EditIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <WeightInputForm edit weight={props.weight} handleClose={handleClose} />
                </DialogContent>
            </Dialog>
        </>
    );
}

EditWeightDialog.propTypes = {
    weight: PropTypes.object.isRequired
};

export default EditWeightDialog;