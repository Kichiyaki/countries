import { Link as RRDLink, LinkProps } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";

const Link = (props: LinkProps) => {
  const classes = useStyles();
  return <RRDLink {...props} className={clsx(classes.link, props.className)} />;
};

const useStyles = makeStyles(() => {
  return {
    link: {
      textDecoration: "none",
      color: "#BB86FC",
    },
  };
});

export default Link;
