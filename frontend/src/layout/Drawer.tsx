import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  ListItemButton,
  ListItemIcon,
} from "@mui/material"

import { Chat, Logout } from "@mui/icons-material";
import { Link } from "react-router-dom";


interface ListLinkProps {
  // onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  href: string
  primary?: string
  icon?: any
  view?: boolean

}


const ListLink = ({
  href,
  primary,
  icon,
  // onClick,
  view = true
}: ListLinkProps) => {

  return (
    <>
      {view ? (
        <Link to={href} style={{ textDecoration: 'none' }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={primary} />
            </ListItemButton>
          </ListItem>
        </Link>
      ) : (
        <>
        </>
      )}

    </>
  )
}



export default function Drawer() {

  const [openModal, setOpenModal] = useState(false)


  async function handleOpen() {
    setOpenModal(true)
  }

  const handleClose = () => {
    setOpenModal(false)

  }


  return (
    <>

      <List>

        <ListLink
          primary=""
          href="/"
          icon={<Chat />}
        />

        <Divider />

        <ListLink
          primary="Chats"
          href="/chats"
          icon={<Chat />}
        />


        <ListLink
          primary="Sair"
          href="/logout"
          icon={<Logout />}
        />




      </List>


    </>
  )

}