import React from "react";
import Button from "@mui/material/Button";

function HeadBtnSet() {
  return (
    <>
      <Button
        variant="contained"
        disableElevation
        style={{
          backgroundColor: "rgba(64,87,109,.07)",
          color: "#0e1318",
          textTransform: "capitalize",
        }}
      >
        Log in
      </Button>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        style={{
          textTransform: "capitalize",
        }}
      >
        Sign In
      </Button>
    </>
  );
}

export default HeadBtnSet;
