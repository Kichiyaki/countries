import React from "react";
import { makeStyles } from "@material-ui/styles";

export interface CardProps {
  children?: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  const classes = useStyles();
  return <div className={classes.card}>{children}</div>;
};

const useStyles = makeStyles(() => {
  return {
    card: {
      backgroundColor: "#424242",
      borderRadius: "3px",
      padding: "8px 16px",
    },
  };
});

export default Card;
