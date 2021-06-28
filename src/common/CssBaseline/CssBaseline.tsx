import { makeStyles } from "@material-ui/styles";

const CssBaseline = () => {
  useStyles();
  return null;
};

const useStyles = makeStyles(() => {
  return {
    "@global": {
      body: {
        color: "white",
        backgroundColor: "#303030",
      },
    },
  };
});

export default CssBaseline;
