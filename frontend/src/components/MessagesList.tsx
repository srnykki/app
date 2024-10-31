import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import { Messsages } from "../types/Model/Messages";
import React from "react";



// const useStyles: any = makeStyles({})

type MessagesProps = {

    messages: Messsages[]
}

export default function MessagesList({
    messages
}: MessagesProps) {

    // const classes = useStyles()

    const user = {
        userId: 1,
        name: "Vini",
    }



    return (
<List>
    {messages.map((message) => { 
        return ( 
            <ListItem sx={{ textAlign: message.author === user.userId ? "right" : "left"}}> 
                <ListItemAvatar style={{display: message.author === user.userId ? "none": "block"}}> 
                    <Avatar alt={message.user.name} src="/static/images/avatar/1.jpg" /> 
                </ListItemAvatar> 
                <ListItemText 
                    primary={message.user.name} 
                    secondary={ 
                        <React.Fragment> 
                            <Typography 
                                component="span" 
                                variant="body2" 
                                sx={{ color: 'text.primary', display: 'inline' }} 
                            > 
                              {message.body} 
                            </Typography> 
                        </React.Fragment> 
                    } 
                /> 
            </ListItem> 
        ); 
    })} 
</List>

    )
}