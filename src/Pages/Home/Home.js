import React from "react";
import { Grid, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { styles } from "../Styles";
import { RowBetween } from "../CommComps/CommonStyles";
import CusHomeBtns from "../CommComps/CusHomeBtns";
import { HomeCard } from "../../constants/HomeConsts";
import HomeCards from "../CommComps/HomeCards";

function Home(props) {
  const { classes } = props;
  return (
    <Grid
      container
      style={{ marginTop: "6rem", height: "80Vh" }}
      flexDirection="row"
    >
      <Grid item sm={1} />
      <Grid container item xs={12} sm={10} className={classes.cont1}>
        <Grid
          container
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          style={{
            backgroundImage: "linear-gradient(#B2FEFA,#0ED2F7)",
            height: "50%",
          }}
        >
          <Typography
            variant="h3"
            style={{
              fontWeight: "bold",
              color: "#fff",
              marginTop: "3rem",
            }}
          >
            What will you design?
          </Typography>
          <div
            style={{
              width: "80%",
              marginBottom: "3rem",
              ...RowBetween,
            }}
          >
            <CusHomeBtns />
          </div>
        </Grid>
        <Grid
          container
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          {HomeCard.map(({ text }, index) => {
            return <HomeCards text={text} key={index} />;
          })}
        </Grid>
      </Grid>
      <Grid item sm={1} />
    </Grid>
  );
}

export default withStyles(styles)(Home);
