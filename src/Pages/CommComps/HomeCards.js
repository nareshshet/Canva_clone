import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

function HomeCards(props) {
  const { text, key } = props;
  return (
    <Grid
      key={key}
      item
      xs={2}
      sm={2.5}
      md={3}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Paper
        elevation={3}
        style={{ borderRadius: 10, width: "100%", height: "60%" }}
      >
        <iframe
          src="https://static.canva.com/anon_home/benefits-collab-en-974x634.mp4"
          autoplay="1&controls=0&loop=1&playlist=8HSr8BjcufM&amp;showinfo=0"
          style={{
            width: "100%",
            borderRadius: 10,
            height: "100%",
          }}
          title="video"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
      </Paper>
      <Typography
        variant="subtitle1"
        style={{
          color: "#000",
          marginTop: "1rem",
        }}
      >
        {text}
      </Typography>
    </Grid>
  );
}

export default HomeCards;
