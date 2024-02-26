import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ChatIcon from '@mui/icons-material/Chat';
import EventNoteIcon from '@mui/icons-material/EventNote';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import QuizIcon from '@mui/icons-material/Quiz';

import List from '@mui/material/List'
import Divider from '@mui/material/Divider';
import makeStyles from '@mui/styles/makeStyles';






function ItemList({ open }: any) {

    const useStyle = makeStyles({
        listItemButton: {
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
        },
        listItemIcon: {
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
        }
    })

    const classes = useStyle()
    return (
        
        <List>
            <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton className={classes.listItemButton}>
                    <ListItemIcon className={classes.listItemIcon}>

                        <ChatIcon />

                    </ListItemIcon>
                    <ListItemText primary={"Chat"} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
            </ListItem>
        </List>
    )
}

export default ItemList