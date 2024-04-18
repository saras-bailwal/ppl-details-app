import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DeleteDialog from "../DeleteDialog/DeleteDialog";
import "./SingleUser.css"
import EditUser from "../EditUser";
import MsgDisplay from "../MsgDisplay";
import { calculateAge } from "../../utils";

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    display:'flex',
    flexDirection: 'column',
    boxShadow: "none"
  }));


  export interface UserItemProps {
    userData: any;
  };

const SingleUser = ({
    userData
  }: UserItemProps) => {
    const [open, setOpen] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    const [msg, setMsg] = React.useState("");
    const [editClicked, setEditClicked] = React.useState(false);

    const handleDeleteUserClick = () => {
        setOpen(true);
    }

    const handleEditClicked = (dob: any) => {
        let age = calculateAge(dob);
        if (age >= 18) {
            setEditClicked(true);
        } else {
            setOpenModal(true);
            setMsg("Only adults data can be edited.")
        }
    }

    const handleEditCancel = () => {
        setEditClicked(false);
    }

    const handleClose = () => {
        setOpen(false);
        setOpenModal(false);
    };

    return (
        <>
            <DeleteDialog id="ringtone-menu" open={open} onClose={handleClose} user={userData}/>
            <MsgDisplay id="ringtone-menu" open={openModal} onClose={handleClose} msg={msg}/>
            
            {editClicked ? <EditUser editUser={userData} onCancel={handleEditCancel} /> : <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Item>
                        <span className="labelColor">Age</span>
                        <span>{calculateAge(userData.dob)} Years</span>
                    </Item>
                </Grid>
                <Grid item xs>
                    <Item>
                        <span className="labelColor">Gender</span>
                        <span className="gender">{userData.gender}</span>
                    </Item>
                </Grid>
                <Grid item xs>
                    <Item>
                        <span className="labelColor">Country</span>
                        <span>{userData.country}</span>
                    </Item>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs>
                    <Item>
                        <span className="labelColor" style={{display: "flex",justifyContent: "flex-start"}}>Description</span>
                        <p style={{textAlign:"left"}}>{userData.description}</p>
                    </Item>
                </Grid>
            </Grid>
            <Box sx={{display: "flex", justifyContent: "flex-end"}}>
                <IconButton color="warning" aria-label="delete user" onClick={handleDeleteUserClick}>
                    <DeleteOutlineOutlinedIcon />
                </IconButton>
                <IconButton color="primary" aria-label="edit user" onClick={() => handleEditClicked(userData.dob)}>
                    <EditOutlinedIcon />
                </IconButton>
            </Box>
        </Box>}
        </>
    )
}

export default SingleUser;