import React, { useState , useRef, useEffect } from "react";

//Components
import HeaderSearch from "./HeaderSearch";

//Assets Local
import logo from "../../Assets/factorD.jpg";

//Material ui
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  Menu,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
// Hooks
import HeaderCart from "./HeaderCart";
import { Link, useNavigate } from "react-router-dom";
import { useStyles } from "../../hooks/useMuiStyle";
import HeaderTopPart from "./HeaderTopPart";
import { useWindowScrollPositions } from "../../hooks/useWindowScrollPosition";
// import { useProducts } from "../../products/useProducts";
// import HeaderAccordian from "./HeaderAccordian";


const drawerWidth = 240;
 const navItems = ["Home", "About Us", "Services", "Expertise", "Contact Us"];

 const Header = (props) => {
  const { window } = props;
  const { scrollX, scrollY } = useWindowScrollPositions()
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [view, setView] = useState(false);
//   const { featureProducts, categories ,navItems} = useProducts();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  

  const [enphaseSearch, setEnphaseSearch] = useState(null);
  const open = Boolean(enphaseSearch);

  const [searchResult, setSearchResult] = useState("");

  const handleClick = (event) => {
    setEnphaseSearch(event.currentTarget);
  };
  const onHandleChange = (e) => {
    e.preventDefault();
    setSearchResult(e.target.value);
  };
  const handleClose = () => {
    setEnphaseSearch(null);
  };
  const handleSearchItemClick = (id) => {
    navigate(`/product/${id}`);
    setSearchResult("");
    handleClose();
  };

  const filteredSerachResult =[]
//    featureProducts.filter((item) => {
//     return Object.values(item.pName)
//       .join("")
//       .toLowerCase()
//       .includes(searchResult.toLowerCase());
//   });
  const handlelistClick = (route) => {
    switch (route) {
      case "Home":
        return navigate("/"), setMobileOpen(false);
      case "About Us":
        return navigate("/about"), setMobileOpen(false);
      case "Contact Us":
        return navigate("/contact"), setMobileOpen(false);
      default:
        return navigate("/");
    }
  };
  const handleCatPageClick = (item) => {
    navigate(`/category/${item.id}?name=${item.catName}`);
    setMobileOpen(false);
  };
  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ py: 2 }}
        className={classes.headermbl}
        onClick={handleDrawerToggle}
      >
        Cognitronics
      </Typography>
      <Divider sx={{ borderWidth: "2px" }} />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          item
          xs={6}
          onClick={() => setView(false)}
          className={classes.headermblsub}
          sx={{
            backgroundColor: !view ? "#eeeeee" : "ffffff",
            color: !view ? "#009f76" : "",
          }}
        >
          MENU
        </Grid>
        <Grid
          item
          xs={6}
          onClick={() => setView(true)}
          className={classes.headermblsub}
          sx={{
            backgroundColor: view ? "#eeeeee" : "ffffff",
            color: view ? "#009f76" : "",
          }}
        >
          CATEGORIES
        </Grid>
      </Grid>
      <List>
        {/* {!view &&
          navItems.map((item) => (
            <>
            {item.contents ? (<HeaderAccordian content={item} setMobileOpen={setMobileOpen}/>):(<>
              <ListItem
              key={item.id}
              disablePadding
              onClick={() => {
                handlelistClick(item.item);
              }}
            >
              <ListItemButton sx={{ textAlign: "left" }}>
                <ListItemText
                  className={classes.listItems}
                  primary={item.item}
                  sx={{
                    ".css-10hburv-MuiTypography-root": {
                      fontFamily:
                        "Poppins Arial Helvetica sans-serif !important",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
            <Divider /></>
            )}
              
            </>
          ))} */}
      </List>
      <List>
        {/* {view &&
          categories.map((item) => (
            <>
              <ListItem
                key={item}
                disablePadding
                sx={{ paddingTop: "0px !important" }}
              >
                <ListItemButton
                  sx={{ textAlign: "left" }}
                  onClick={() => {
                    handleCatPageClick(item);
                  }}
                >
                  <ListItemText
                    primary={item.catName}
                    sx={{
                      ".css-10hburv-MuiTypography-root": {
                        fontFamily:
                          "Poppins Arial Helvetica sans-serif !important",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          ))} */}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
    <Box ref={headerRef}>
    <HeaderTopPart />
    </Box>
    <Box className={`${scrollY > 4 ? classes.headerContainer :classes.headerCon}`} >
      <AppBar component="nav" className={`${scrollY > 4 ? classes.headerFixed :classes.appBar}`}>
        <Toolbar className={classes.hearderToolbar}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              md: 2,
              display: { sm: "flex", md: "none" },
              color: "#3a3a3a",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{ display: "flex", textDecoration: "none" }}
            className={classes.headerlogoContainer}
          >
            <Link to="/">
              {" "}
              <img src={logo} alt="logo" className={classes.headerLogo} />
              {/* Factor D */}
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            <HeaderSearch />
          </Box>
          <Box sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}>
            <Button
              className={classes.headerSearchButton}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <SearchIcon sx={{ color: "#3a3a3a" }} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={enphaseSearch}
              open={open}
              className={classes.searchDropdow}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{ left: "-2px !important", top: "10px !important" }}
            >
              <Box className={classes.searchInput}>
                <Grid item className={classes.storeinputData}>
                  <TextField
                    type="search"
                    name="search"
                    sx={{ width: "90%" }}
                    placeholder="Search..."
                    className={classes.searchBox1}
                    value={searchResult}
                    onChange={onHandleChange}
                    onKeyDown={(event) => event.stopPropagation()}
                  />
                </Grid>
                <Box>
                  {searchResult && (
                    <ul style={{ marginTop: "10px", paddingLeft: "10px" }}>
                      {filteredSerachResult.map((item) => {
                        return (
                          <>
                            <li
                              className={classes.headersearchList}
                              key={item}
                              onClick={() => handleSearchItemClick(item.id)}
                            >
                              <Box className={classes.cartImgContainer}>
                                <img
                                  style={{ width: "100%" }}
                                  src={item.imgUrl}
                                  alt="search"
                                />
                              </Box>
                              <Box className={classes.bagCartListDetails}>
                                <Box
                                  className={classes.bagCartText}
                                  sx={{ width: "90%" }}
                                >
                                  {item.pName}
                                </Box>
                              </Box>
                            </li>
                            <Divider />
                          </>
                        );
                      })}
                    </ul>
                  )}
                </Box>
              </Box>
            </Menu>
          </Box>
          <Box className={classes.headerSideContainer}>
          <HeaderCart icon={<ShoppingBasketIcon sx={{fontSize:"1.8em",color:" #002831"}}/>} content={"Your Cart"} />
          <HeaderCart icon={<ShareLocationIcon sx={{fontSize:"1.8em",color:" #002831"}}/>} content={"Track Order"}/>
          <HeaderCart icon={<AccountCircleIcon sx={{fontSize:"1.8em",color:" #002831"}}/>} content={"Login/Register"}/>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              // backgroundColor: "#009f76",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
    </>
  );
};

export default Header
