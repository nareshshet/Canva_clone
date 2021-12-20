export const RowBetween = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};
export const ColBetween = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
};

export const styles = (theme) => ({
  toolBar: {
    ...RowBetween,
  },
  btnList: {
    width: "100%",
    ...RowBetween,
    [theme.breakpoints.down("md")]: {
      height: "100vh",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
  },
});
