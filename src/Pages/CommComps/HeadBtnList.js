import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, useTheme, useMediaQuery } from "@mui/material";
import { ColBetween, styles } from "./CommonStyles";
import { HeadBtn } from "../../constants/HeaderConsts";
import { withStyles } from "@mui/styles";
import HeadBtnSet from "./HeadBtnSet";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const CusButton = (props) => {
  const { name, isDrop = false, ...other } = props;
  const theme = useTheme();
  const XsScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const SmScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  return (
    <Button
      variant="text"
      {...other}
      endIcon={
        isDrop ? (
          XsScreen || SmScreen ? (
            <ChevronRightIcon />
          ) : (
            <ExpandMoreIcon />
          )
        ) : null
      }
      fullWidth={XsScreen || SmScreen ? true : false}
      style={{
        textTransform: "capitalize",
        color: "#0e1318",
        justifyContent: "space-between",
      }}
    >
      {name}
    </Button>
  );
};

function HeadBtnList(props) {
  const { classes } = props;
  const theme = useTheme();
  const XsScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const SmScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  return (
    <div
      className={classes.btnList}
      style={{ justifyContent: XsScreen || SmScreen ? "space-around" : null }}
    >
      <div
        style={{
          height: XsScreen || SmScreen ? "60%" : "100%",
          display: "flex",
          flexDirection: XsScreen || SmScreen ? "column" : "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {HeadBtn.map(({ ...rest }, index) => {
          return <CusButton key={index} {...rest} />;
        })}
      </div>
      {XsScreen ? (
        <div
          style={{
            width: "100%",
            height: "15vh",
            ...ColBetween,
          }}
        >
          <HeadBtnSet />
        </div>
      ) : null}
    </div>
  );
}

export default withStyles(styles)(HeadBtnList);
