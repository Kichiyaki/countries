import { makeStyles } from "@material-ui/styles";
import Container from "common/Container/Container";
import useContinents from "./useContinents";

const ContinentsPage = () => {
  const { loading, continents } = useContinents();
  const classes = useStyles();
  console.log(loading, continents);
  if (loading) {
    return (
      <div className={classes.loading}>
        <Container>
          <h1>Loading continents...</h1>
        </Container>
      </div>
    );
  }
  return <Container></Container>;
};

const useStyles = makeStyles(() => {
  return {
    loading: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
    },
  };
});

export default ContinentsPage;
