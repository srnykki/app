import {
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemButton,
  ListItemIcon,
} from "@mui/material"

import { Chat, Logout, Newspaper } from "@mui/icons-material";
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
          primary="Noticias"
          href="/news"
          icon={<Newspaper />}
        />

        <Divider />

        <ListLink
          primary="Sair"
          href="/logout"
          icon={<Logout />}
        />




      </List>


    </>
  )

}