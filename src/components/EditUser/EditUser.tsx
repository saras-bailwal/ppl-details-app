import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { IconButton } from '@mui/material';
import { calculateAge } from '../../utils';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import MsgDisplay from '../MsgDisplay';
import React from 'react';
import { useAppDispatch } from '../../store/store';
import { updateUserData } from '../../store/userSlice';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 14,
    position: 'relative',
    border: '1px solid',
    borderColor: '#C6C5D0',
    fontSize: 14,
    width: 'auto',
    padding: '6px 8px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));


export interface EditItemProps {
    editUser: any | null;
    onCancel: () => void;
  }; 

const EditUser = ({editUser, onCancel}: EditItemProps) => {
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = React.useState(false);
  const [genderData, setGenderData] = React.useState(editUser.gender);
  const [countryData, setCountryData] = React.useState(editUser.country);
  const [descData, setDescData] = React.useState(editUser.description);



  const [editBtnDisabled, setEditBtnDisabled] = React.useState(false);
  const [msg, setMsg] = React.useState("");
    const handleCancel = () => {
      onCancel();
    }

   const handletextAreaChange = (event: any) => {
      if (event?.target?.value === "") {
        setOpenModal(true);
        setMsg("Description cannot be empty");
        setEditBtnDisabled(true)
      } else {
        setDescData(event?.target?.value);
        setEditBtnDisabled(false)
      }
    }

    const handleUpdateData = () => {
      dispatch(updateUserData({
        id: editUser.id,
        gender: genderData,
        country: countryData,
        description: descData
      }));
      onCancel();
    }

    const genderOptions = [
      {
        value: 'male',
        label: 'Male',
      },
      {
        value: 'female',
        label: 'Female',
      },
      {
        value: 'transgender',
        label: 'Transgender',
      },
      {
        value: 'rather not say',
        label: 'Rather not say',
      },
      {
        value: 'other',
        label: 'Other',
      },
    ];

    const handleClose = () => {
      setOpenModal(false);
  };

    return (
    <><>
     <MsgDisplay id="ringtone-menu" open={openModal} onClose={handleClose} msg={msg}/>
    <Box
        component="form"
        noValidate
        sx={{
          display: 'flex',
          justifyContent: "space-evenly"
        }}
      >
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input" sx={{ marginLeft: "10px" }}>
            Age
          </InputLabel>
          <BootstrapInput type='number' defaultValue={calculateAge(editUser.dob)} id="bootstrap-input" />
        </FormControl>
        <FormControl variant="standard" size='small'>
          <InputLabel shrink htmlFor="bootstrap-input" sx={{ marginLeft: "10px" }}>
            Gender
          </InputLabel>
          <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          defaultValue={editUser.gender}
          input={<BootstrapInput />}
          onChange={(e) => setGenderData(e.target.value)}
        >
          {genderOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input" sx={{ marginLeft: "10px" }}>
            Country
          </InputLabel>
          <BootstrapInput type='text' onChange={(e) => setCountryData(e.target.value)} defaultValue={editUser.country} id="bootstrap-input"/>
        </FormControl>
      </Box>
        <Box>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input" sx={{ marginLeft: "10px", marginTop: "2px" }}>
              Description
            </InputLabel>
            <textarea typeof='text' style={{
              width: "545px",
              marginTop: "20px",
              borderRadius: "14px",
              height: "150px",
              borderColor: "#C6C5D0",
              backgroundColor: "#fff",
              color: "#333"
            }} defaultValue={editUser.description} id="bootstrap-input" onChange={(e) => handletextAreaChange(e)}/>
          </FormControl>
        </Box></>
        <Box sx={{display: "flex", justifyContent: "flex-end"}}>
            <IconButton color="warning" aria-label="cancel update" onClick={handleCancel}>
              <HighlightOffRoundedIcon/>
            </IconButton>
            <IconButton color="success" aria-label="update data" disabled={editBtnDisabled} onClick={handleUpdateData} >
              <CheckCircleOutlineRoundedIcon/>
            </IconButton>
        </Box>
        </>
    )
}

export default EditUser;