import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  Tooltip,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import { RowBetween, styles } from "./CommonStyles";
import CanvaLogo from "../../assets/images/Canva_Logo.png";
import HeadBtnList from "./HeadBtnList";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import HeadBtnSet from "./HeadBtnSet";

function Header(props) {
  const { classes } = props;
  const theme = useTheme();
  const XsScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const SmScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const Lg = useMediaQuery(theme.breakpoints.up("md"));
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    if (Lg) {
      setDrawer(false);
    }
  }, [Lg]);

  const closeDrawer = () => {
    setDrawer(false);
  };

  const openDrawer = () => {
    setDrawer(true);
  };

  return (
    <AppBar position="fixed" style={{ background: "#fff" }}>
      <Toolbar className={classes.toolBar}>
        <div
          style={{
            width: "50%",
            ...RowBetween,
          }}
        >
          <img
            src={CanvaLogo}
            alt="Canva Logo"
            width={SmScreen ? "15%" : "20%"}
          />
          {SmScreen || XsScreen ? null : <HeadBtnList />}
        </div>
        <div
          style={{
            width: SmScreen ? "40%" : XsScreen ? "10%" : "20%",
            ...RowBetween,
          }}
        >
          {XsScreen ? null : (
            <>
              <Tooltip title="Help Center">
                <IconButton
                  aria-label="Help"
                  style={{
                    borderRadius: 10,
                  }}
                >
                  <HelpOutlineIcon />
                </IconButton>
              </Tooltip>

              <HeadBtnSet />
            </>
          )}
          {SmScreen || XsScreen ? (
            <IconButton aria-label="Menu" onClick={openDrawer}>
              <MenuIcon />
            </IconButton>
          ) : null}
        </div>
        <Drawer
          variant="temporary"
          anchor="right"
          open={drawer}
          onClose={closeDrawer}
        >
          <Box sx={{ width: 250 }} role="presentation">
            <HeadBtnList />
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Header);
