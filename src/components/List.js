import React from "react";
import { Link } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withPrefix } from "gatsby";
import withStyles from "@material-ui/styles/withStyles";

const styles = {
  cardMedia: {
    height: "200px",
  },
};

const List = props => {
  const { classes } = props;
  return (
    <Grid
      alignItems="flex-start"
      container
      direction="row"
      justify="center"
      spacing={8}
    >
      {props.items.map(edge => {
        const {
          node: {
            excerpt,
            frontmatter: {
              path,
              title,
              image: { publicURL },
            },
          },
        } = edge;
        return (
          <Grid item key={path} md={6} xs={12}>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image={withPrefix(publicURL)}
              />
              <CardContent>
                <Typography component="h2" gutterBottom variant="h5">
                  <Link to={path}>{title}</Link>
                </Typography>
                <Typography align="center" component="p">{excerpt}</Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default withStyles(styles)(List);
