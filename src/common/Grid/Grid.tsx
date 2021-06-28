import React from "react";
import { makeStyles } from "@material-ui/styles";

export interface GridProps {
  children?: React.ReactNode;
}

const Grid = ({ children }: GridProps) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};

const useStyles = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        boxSizing: "border-box",
        flexBasis: `${100 / 3}%`,
        maxWidth: `${100 / 3}%`,
        flexGrow: 0,
        padding: "8px",
      },
    },
  };
});

export default Grid;
