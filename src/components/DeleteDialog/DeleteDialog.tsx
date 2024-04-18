import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export interface ConfirmationDialogRawProps {
    id: string;
    open: boolean;
    user: any;
    onClose: (value?: string) => void;
  }
const DeleteDialog = (props: ConfirmationDialogRawProps) => {
    const { onClose, open, user } = props;
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleCancel = () => {
      onClose();
    };
    const handleDelete = () => {
    }
   
    React.useEffect(() => {
        if (!open) {
        }
      }, [open]);
  
    return (
      <React.Fragment>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogContent>
            <DialogContentText>
             Are you sure you want to delete?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleCancel} >
              Cancel
            </Button>
            <Button variant="contained" color="error" onClick={handleDelete} autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }


export default DeleteDialog;