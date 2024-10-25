import { Avatar, IconButton, Typography } from "@mui/material"
import { useState } from "react";

export default function Toolbar() {

    const [profile, setProfile] = useState(false);

    return (
        <>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Coleta Eletronica
            </Typography>

            <div>
                <IconButton
                    onClick={() => setProfile(true)}
                    sx={{ p: 0 }}>

                    <Avatar
                        alt={undefined}
                        src={"/null"}
                    />
                </IconButton>
            </div>
        </>
    )
}