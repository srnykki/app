import { Avatar, IconButton, Typography } from "@mui/material"

export default function Toolbar() {

    return (
        <>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Coleta Eletronica
            </Typography>

            <div>
                <IconButton
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