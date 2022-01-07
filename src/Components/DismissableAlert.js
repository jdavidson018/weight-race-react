import * as React from 'react';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';

const DismissableAlert = (props) => {

    return (
        <Collapse in={props.show}>
            <Alert
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            props.closeAlert();
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
            >
                {props.text}
            </Alert>
        </Collapse>
    );
}

DismissableAlert.propTypes = {
    closeAlert: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default DismissableAlert;