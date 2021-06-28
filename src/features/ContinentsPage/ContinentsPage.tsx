import { generatePath } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Container from "common/Container/Container";
import Grid from "common/Grid/Grid";
import Link from "common/Link/Link";
import Card from "common/Card/Card";
import { Route } from "config/routing";
import useContinents from "./useContinents";

const ContinentsPage = () => {
  const { loading, continents, error } = useContinents();
  const classes = useStyles();

  if (loading || error) {
    return (
      <div className={classes.center}>
        <Container>
          <h1>{typeof error === "string" ? error : "Loading continents..."}</h1>
        </Container>
      </div>
    );
  }
  return (
    <div className={classes.center}>
      <Container>
        <Grid>
          {continents.map((continent) => {
            return (
              <div key={continent.code}>
                <Card>
                  <h1>
                    <Link
                      to={generatePath(Route.ContinentPage, {
                        code: continent.code,
                      })}
                    >
                      {continent.name} ({continent.code})
                    </Link>
                  </h1>
                </Card>
              </div>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

const useStyles = makeStyles(() => {
  return {
    center: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
    },
  };
});

export default ContinentsPage;
