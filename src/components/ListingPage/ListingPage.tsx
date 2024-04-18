import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react';
import { usersList } from '../../mockData';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import SingleUser from '../SingleUser';

type UserItemProps = {
    userData: any;
    editUser: any | null;
    getEditUser: (editTodo: any) => void;
    setEditUser: (editTodo: any) => void;
  };

const ListingPage = ({
    userData,
    editUser,
    getEditUser,
    setEditUser,
  }: UserItemProps) => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [expanded, setExpanded] = React.useState<string | false>(false);

    useEffect(() => {
        getUsers(usersList);
    }, []);

    //Simulating making api call with useEffect
    const getUsers = (usersList: any) => {
        setUsers(usersList);
    };
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    const bySearch = (user: any, search: any) => {
        if (search) {
            return user.first.toLowerCase().includes(search.toLowerCase()) || user.last.toLowerCase().includes(search.toLowerCase());
        } else return user;
    };

    const filteredList = (users: any, search: any) => {
        return users
            .filter((user: any) => bySearch(user, search));
    };

    const stringToColor = (string: string) => {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }
      
      const stringAvatar = (name: string) => {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      }

    return (
        <><div style={{ display: "flex", justifyContent: "center" }}>
            <Paper
                component="form"
                sx={{ p: '2px 4px', position: "absolute", top: "0", margin: "20px", width: "50%" }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Celebrities"
                    inputProps={{ 'aria-label': 'search celebrities' }}
                    onChange={e => setSearch(e.target.value)} />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
            <div style={{marginTop: "50px", width: "50%", marginLeft: "auto",
    marginRight: "auto"
            }}>
                {filteredList(users, search).map((user: any) => (
                    <Accordion expanded={expanded === user.id} onChange={handleChange(user.id)} key={user.id}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            <Avatar {...stringAvatar(`${user.first} ${user.last}`)} />
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>{user.first} {user.last}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SingleUser
                            key={user.id}
                            userData={user}
                            editUser={editUser}
                            getEditUser={getEditUser}
                            setEditUser={setEditUser}
                            />
                        </AccordionDetails>
                    </Accordion>
                ))}

            </div></>
    );
}

export default ListingPage