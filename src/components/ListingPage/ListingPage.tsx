import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import SingleUser from '../SingleUser';
import { useAppSelector } from '../../store/store';

const ListingPage = () => {
    const [search, setSearch] = useState("");
    const [expanded, setExpanded] = useState<string | false>(false);

    const usersStateList = useAppSelector(state=>state.usersData.users);

    const handleChange =
        (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
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
                {filteredList(usersStateList, search).map((user: any) => (
                    <Accordion expanded={expanded === user.id} onChange={handleChange(user.id)} key={user.id}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            <Avatar alt={`${user.first} ${user.last}`} src={user.picture} />
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>{user.first} {user.last}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SingleUser
                            key={user.id}
                            userData={user}
                            />
                        </AccordionDetails>
                    </Accordion>
                ))}

            </div></>
    );
}

export default ListingPage