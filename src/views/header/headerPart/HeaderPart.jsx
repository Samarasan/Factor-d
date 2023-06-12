import React from "react";
import { useStyles } from "../../../hooks/useMuiStyle";
import { useProducts } from "../../../hooks/useProduct";
import { Grid, Box, Menu, MenuItem, Button, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, useNavigate } from "react-router-dom";
import { useWindowScrollPositions } from "../../../hooks/useWindowScrollPosition";

const HeaderPart = () => {
  const classes = useStyles();
  const { navItems } = useProducts();
  const navigate = useNavigate();
  const { scrollY } = useWindowScrollPositions();
  // console.log(scrollY,"scroll");
  const handlelistClick = (route) => {
    // switch (route.item) {
    //   case "Home":
    //     return navigate("/");
    //   case "About Us":
    //     return navigate("/about");
    //     case "Products":
    //       return navigate("/products");
    //   case "Contact Us":
    //     return navigate("/contact");
    //   case "Services":
    //     return navigate("/services");
    //   case "Expertise":
    //     return navigate("/services" );
    //   default:
    //     return navigate("/");
    // }
  };
  return (
    <div
      className={`${
        scrollY > 16
          ? classes.headerPartContainer1
          : classes.headerPartContainer
      }`}
    >
      <Box
        className={classes.headerPartLists}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        {navItems.map((item) => {
          return (
            <>
              {item.contents ? (
                <>
                  <div key={item.id} className="dropdown">
                    <div className="dropsplit">
                      <button
                        className={scrollY > 16 ? "dropbtn1" : "dropbtn"}
                        onClick={() => handlelistClick(item)}
                      >
                        {item.item}
                      </button>
                      <div>
                        <ExpandMoreIcon
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "-4px",
                          }}
                        />
                      </div>
                    </div>

                    <div className="dropdown-content">
                      {item.contents.map((item) => (
                        <Link
                          to={
                            item.id > 7
                              ? `/expertise/${item.id}`
                              : `/service/${item.id}`
                          }
                          key={item.id}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <li
                  className={classes.partListItems1}
                  onClick={() => {
                    handlelistClick(item);
                  }}
                >
                  {item.item}
                </li>
              )}
            </>
          );
        })}
      </Box>
    </div>
  );
};

export default HeaderPart;
