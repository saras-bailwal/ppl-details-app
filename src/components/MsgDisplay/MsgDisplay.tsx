import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export interface MsgProps {
    id: string;
    open: boolean;
    msg: string;
    onClose: (value?: string) => void;
  }

const MsgDisplay = (props: MsgProps) => {
    const { onClose, open, msg } = props;
    const handleClose = () => {
        onClose();
      };
    React.useEffect(() => {
        if (!open) {
        }
      }, [open]);
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Alert
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {msg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    )
}

export default MsgDisplay;