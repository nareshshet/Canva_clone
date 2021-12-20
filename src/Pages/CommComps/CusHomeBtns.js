import React from "react";
import { IconButton, Typography } from "@mui/material";
import { ColBetween, RowBetween, styles } from "./CommonStyles";
import StarIcon from "@mui/icons-material/Star";
import { HomeBtn } from "../../constants/HomeConsts";
import { withStyles } from "@mui/styles";

const CusBtn = (props) => {
  const { text, key, classes, ...rest } = props;
  return (
    <div
      key={key}
      style={{
        ...ColBetween,
      }}
    >
      <IconButton
        style={{
          backgroundColor: "rgba(255,255,255,0.5)",
        }}
      >
        <StarIcon
          style={{
            color: "#fff",
            "&:hover": {
              color: "red",
            },
          }}
        />
      </IconButton>
      <Typography
        variant="caption"
        style={{
          color: "#fff",
          fontWeight: "200",
        }}
      >
        {text}
      </Typography>
    </div>
  );
};

function CusHomeBtns(props) {
  const { classes } = props;
  return (
    <div
      style={{
        width: "100%",
        ...RowBetween,
      }}
    >
      {HomeBtn.map(({ text }, index) => {
        return <CusBtn key={index} text={text} classes={classes} />;
      })}
    </div>
  );
}

export default withStyles(styles)(CusHomeBtns);
