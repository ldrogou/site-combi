import withRoot from "../utils/withRoot";
import React from "react";
import { graphql, Link } from "gatsby";
import SEO from "../components/SEO";
import Card from "../components/Card";
import Page from "../components/Page";
import Button from "@material-ui/core/Button";
import Carousel from "../components/Carousel";
import Avatar from "@material-ui/core/Avatar";
import { Gift } from "mdi-material-ui";
import withStyles from "@material-ui/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import { CardContent } from "@material-ui/core";

const styles = () => ({
  root: {
    fontWeight: "bold",
  },
});
const Home = props => {
  const products = props.data.allMarkdownRemark.edges;
  return (
    <Page title="Combinaisons RCH">
      <Card>
        <CardContent>
      <Typography component="p" gutterBottom variant="p">

      Le club dispose depuis fin septembre de nouvelles combinaisons.<br/> 
Comme les saisons précédentes, les combinaisons (uniquement manches courtes) sont disponibles à la location au prix de 15€ pour la saison.<br/>
Nous vous offrons la possibilité, si vous le souhaitez, de commander vos équipements individuels aux couleurs du RCH.<br/>
Nous avons sélectionné dans le catalogue DSX les produits qui sont susceptibles de vous interesser.<br/>
Vous trouverez dans ce document :
<ul>
   <li>les produits que nous proposons à l'achat</li>
   <li>les prix unitaires TTC</li>
   <li>le design club (soit les "vraies photos" pour les combis MC, les vestes et les zippés, soit les maquettes DSX ou les photos catalogue</li>
   <li>lien vers le googleform vous permettant de passer vos commandes</li>
</ul>
Le club n'a pas prévu d'acheter un gros stock de vestes. Pour autant, nous comprenons que vous préfereriez les louer. Si vous êtes interessés, merci de completer la rubrique dédiée dans le google form.<br/>
      </Typography>
      </CardContent>
      </Card>
      <SEO title="Home">
        <meta
          content="Beautiful Gatsby Material UI Business Starter. Tiny code. Well organized. Ready to customize and go."
          name="description"
        />
      </SEO>

      <Card
        action={
          <Button
            className={props.classes.root}
            color="secondary"
            component={Link}
            to="/products"
            variant="contained"
          >
           Tous les produits 
          </Button>
        }
        avatar={
          <Avatar>
            <Gift />
          </Avatar>
        }
        style={{ minHeight: 523 }}
        title="Nos Produits"
      >
        <Carousel items={products} />
      </Card>
    </Page>
  );
};

export const query = graphql`
  query {
    allFile(filter: { extension: { eq: "jpg" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/products/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            image {
              publicURL
            }
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
  }
`;

export default withRoot(withStyles(styles)(Home));
