import {Divider, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useState} from "react";

/**
 * Sidebar
 * @constructor
 */
export const SideBar = (): JSX.Element => {
    const [aboutDialogueOpen, setAboutDialogueOpen] = useState(false);
    return (
        <div style={{width: 250}}>
            {/*Delete all button*/}
            <List>
                <ListItem button onClick={e => console.log("Hey")} >
                    <ListItemIcon><HomeIcon/></ListItemIcon>
                    <ListItemText primary="Dashboard"/>
                </ListItem>
            </List>

            <Divider/>
            <List>
                <ListItem button onClick={e => alert("Ever heard of Youtubed Vanced?\nI haven't")} >
                    <ListItemIcon><VisibilityOffIcon/></ListItemIcon>
                    <ListItemText primary="Secret"/>
                </ListItem>
            </List>
            <List>
                <ListItem button onClick={e => console.log("Hey")} >
                    <ListItemIcon><InfoIcon/></ListItemIcon>
                    <ListItemText primary="About"/>
                </ListItem>
            </List>
        </div>
    );
}