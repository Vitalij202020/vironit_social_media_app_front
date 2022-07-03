import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import {NavLink} from "react-router-dom";
import PeopleIcon from '@mui/icons-material/People';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import {ListItem, Switch} from "@mui/material";
import {ModeNight} from "@mui/icons-material";

function LeftSide() {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    return (
        <Box sx={{width: '100%', bgcolor: 'background.paper', mb: 2}}>
            <List component="nav" aria-label="main mailbox folders">
                <NavLink to="/">
                    <ListItemButton
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Main"/>
                    </ListItemButton>
                </NavLink>
                <NavLink to="/profile">
                    <ListItemButton
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <ListItemIcon>
                            <PersonIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Profile"/>
                    </ListItemButton>
                </NavLink>
                <NavLink to="/notifications">
                    <ListItemButton
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <ListItemIcon>
                            <NotificationsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Notifications"/>
                    </ListItemButton>
                </NavLink>
                <NavLink to="/chat">
                    <ListItemButton
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                    >
                        <ListItemIcon>
                            <ChatIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Chat"/>
                    </ListItemButton>
                </NavLink>
            </List>
            <Divider/>
            <List component="nav" aria-label="secondary mailbox folder">
                <NavLink to="/users">
                    <ListItemButton
                        selected={selectedIndex === 4}
                        onClick={(event) => handleListItemClick(event, 4)}
                    >
                        <ListItemIcon>
                            <PeopleIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Users"/>
                    </ListItemButton>
                </NavLink>
                <NavLink to="/friends">
                    <ListItemButton
                        selected={selectedIndex === 5}
                        onClick={(event) => handleListItemClick(event, 5)}
                    >
                        <ListItemIcon>
                            <EmojiPeopleIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Friends"/>
                    </ListItemButton>
                </NavLink>
                <Divider sx={{m: '10px 0 20px 0'}}/>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <ModeNight />
                        </ListItemIcon>
                        <Switch />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}

export default LeftSide;

