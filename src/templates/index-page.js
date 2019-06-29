import { graphql } from "gatsby";
import LandingPage from "../landing/LandingPage";

export default LandingPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
