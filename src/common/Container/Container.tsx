import { makeStyles } from "@material-ui/styles";

export interface ContainerProps {
  children?: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};

const useStyles = makeStyles(() => {
  return {
    container: {
      padding: "0 20px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
  };
});

export default Container;
