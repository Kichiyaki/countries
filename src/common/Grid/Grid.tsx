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
        "@media (max-width: 960px)": {
          flexBasis: `${100 / 2}%`,
          maxWidth: `${100 / 2}%`,
        },
        "@media (max-width: 600px)": {
          flexBasis: `100%`,
          maxWidth: `100%`,
        },
      },
    },
  };
});

export default Grid;
