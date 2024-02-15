import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import TemporaryDrawer from "../Drawer/drawer";
import { Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const router = useRouter();
  const moveNavigation = (value) => {
    router.replace(value);
  };

  const c2 =
    useSelector((state) => state.cup.count) +
    useSelector((state) => state.sofa.count) +
    useSelector((state) => state.table.count) +
    useSelector((state) => state.chair.count);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <TemporaryDrawer />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Velvet Visions
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <ButtonGroup
            variant="text"
            aria-label="Basic button group"
            size="large"
          >
            <Button
              style={{ color: "lightgray" }}
              onClick={() => moveNavigation("/")}
            >
              Home
            </Button>
            <Button
              style={{ color: "lightgray" }}
              onClick={() => moveNavigation("/chair")}
            >
              Chairs
            </Button>
            <Button
              style={{ color: "lightgray" }}
              onClick={() => moveNavigation("/sofa")}
            >
              Sofa
            </Button>
            <Button
              style={{ color: "lightgray" }}
              onClick={() => moveNavigation("/table")}
            >
              Table
            </Button>
            <Button
              style={{ color: "lightgray" }}
              onClick={() => moveNavigation("/Cupboard")}
            >
              Cupboard
            </Button>

            <Button
              style={{ color: "lightgray" }}
              onClick={() => moveNavigation("/cart")}
            >
              <Badge badgeContent={c2} color="info">
                Cart <ShoppingCartIcon />
              </Badge>
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
