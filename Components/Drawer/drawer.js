import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import HomeIcon from "@mui/icons-material/Home";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import ChairRoundedIcon from "@mui/icons-material/ChairRounded";
import DoorSlidingRoundedIcon from "@mui/icons-material/DoorSlidingRounded";
import EventSeatSharpIcon from "@mui/icons-material/EventSeatSharp";
import TableRestaurantRoundedIcon from "@mui/icons-material/TableRestaurantRounded";
import List from "@mui/material/List";
import { useRouter } from "next/router";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
export default function TemporaryDrawer(props) {
  const router = useRouter();
  const [state, setState] = React.useState({
    left: false,
  });

  const MovePage = (value) => {
    router.replace(value);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography
        variant="h4"
        align="center"
        style={{ fontFamily: "monospace" }}
      >
        <AddBusinessRoundedIcon />
        Velvet<br></br>Visions
      </Typography>
      <Divider />
      <List>
        <ListItem
          disablePadding
          onClick={() => {
            MovePage("/");
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          onClick={() => {
            MovePage("chair");
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <EventSeatSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Chair" />
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          onClick={() => {
            MovePage("/sofa");
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <ChairRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Sofa" />
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          onClick={() => {
            MovePage("/cupboard");
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <DoorSlidingRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Cupboard" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            MovePage("/table");
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <TableRestaurantRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Table" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Typography onClick={toggleDrawer("left", true)} color="info">
        <MenuIcon />
      </Typography>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}
