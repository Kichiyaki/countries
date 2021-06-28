import { makeStyles } from "@material-ui/styles";
import { useParams } from "react-router-dom";
import Grid from "common/Grid/Grid";
import Container from "common/Container/Container";
import useContinent from "./useContinent";
import Card from "../../common/Card/Card";

const ContinentPage = () => {
  const classes = useStyles();
  const params = useParams<{ code: string }>();
  const { continent, error, loading } = useContinent(params.code);

  if (loading || error || !continent) {
    return (
      <div className={classes.center}>
        <Container>
          <h1>
            {typeof error === "string"
              ? error
              : !continent && !loading
              ? "Continent not found"
              : "Loading continent..."}
          </h1>
        </Container>
      </div>
    );
  }

  return (
    <div className={classes.center}>
      <Container>
        <h1 className={classes.h1}>
          {continent.name} ({continent.code})
        </h1>
        <Grid>
          {continent.countries.map((country) => {
            return (
              <div key={country.code}>
                <Card>
                  {country.emoji} {country.name} ({country.code}) -{" "}
                  {country.languages?.[0]?.name}
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
    h1: {
      textAlign: "center",
    },
  };
});

export default ContinentPage;
