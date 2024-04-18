import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    display:'flex',
    flexDirection: 'column',
    boxShadow: "none" 
  }));



type UserItemProps = {
    userData: any;
    editUser: any | null;
    getEditUser: (editTodo: any) => void;
    setEditUser: (editTodo: any) => void;
  };

const SingleUser = ({
    userData,
    editUser,
    getEditUser,
    setEditUser,
  }: UserItemProps) => {

    // const dispatch = useDispatch();

    // const handleToggleTodoChange = () =>
    //   dispatch(toggleUser({ UserId: userData.id }));
    // const handleGetEditTodoClick = () => getEditUser(userData);
    // const handleDeleteTodoClick = () => {
    //   dispatch(deleteUser({ UserId: userData.id }));
    //   if (userData.id === editUser?.id) {
    //     setEditUser({ id: "", task: "", completed: false });
    //   }
    // };

    console.log("userData ===== ", userData);
    console.log("editUser ==== ", editUser);
    console.log("getEditUser =====", getEditUser);
    console.log("setEditUser ====", setEditUser);

    return (
        <>
        <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Item>
                        <span>Age</span>
                        <span>{userData.dob}</span>
                    </Item>
                </Grid>
                <Grid item xs>
                    <Item>
                        <span>Gender</span>
                        <span>{userData.gender}</span>
                    </Item>
                </Grid>
                <Grid item xs>
                    <Item>
                        <span>Country</span>
                        <span>{userData.country}</span>
                    </Item>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs>
                    <Item>
                        <span style={{display: "flex",justifyContent: "flex-start"}}>Description</span>
                        <p style={{textAlign:"left"}}>{userData.description}</p>
                    </Item>
                </Grid>
            </Grid>
            <Box sx={{display: "flex", justifyContent: "flex-end"}}>
                <IconButton color="warning" aria-label="delete user">
                    <DeleteOutlineOutlinedIcon />
                </IconButton>
                <IconButton color="primary" aria-label="edit user">
                    <EditOutlinedIcon />
                </IconButton>
            </Box>
            
        </Box>
        
        </>
    )
}

export default SingleUser;