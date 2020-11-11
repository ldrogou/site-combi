import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { graphql, Link } from "gatsby";
import withStyles from "@material-ui/styles/withStyles";

const styles = theme => ({
  featureChip: {
    fontSize: "16px",
    backgroundColor: "#fff",
    border: "1pt solid #eee",
  },
  featureChipRight: {
    fontSize: "16px",
    backgroundColor: "#fff",
    border: "1pt solid #eee",
    float: "right",
  },
  featureGrid: {
    marginBottom: "25px",
  },
  avi: {
    width: "40px",
    height: "40px",
    color: "#fff",
    backgroundColor: theme.palette.secondary.light,
  },
});
const HomeFeatures = props => {
  return (
    <Grid
      className={props.classes.featureGrid}
      container
      justify="center"
      spacing={8}
    >
     <Button
            className={props.classes.root}
            color="secondary"
            variant="contained"
          >
            <a href="https://gmail.com">Commande</a>
          </Button> 
    </Grid>
  );
};

export default withStyles(styles)(HomeFeatures);
