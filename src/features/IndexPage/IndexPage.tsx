import { makeStyles } from "@material-ui/styles";
import Link from "common/Link/Link";
import Container from "common/Container/Container";
import { Route } from "config/routing";

const IndexPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Container>
        <h1 className={classes.h1}>
          <Link to={Route.ContinentsPage}>Continent list</Link>
        </h1>
      </Container>
    </div>
  );
};

const useStyles = makeStyles(() => {
  return {
    main: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
    },
    h1: {
      fontSize: "5rem",
    },
  };
});

export default IndexPage;
