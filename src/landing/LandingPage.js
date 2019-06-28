import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

const LandingPage = () => (
  <Layout>
    <div>
      <div className="bg flex object-center content-center items-center justify-center">
        <div className="profile object-contain h-48 w-48" />
      </div>
      <div className="w-full max-w-screen-xl mx-auto px-6">
        <div className="lg:flex -mx-6">
          <div className="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible">
            <div className="flex">
              <div className="pt-24 pb-16 lg:pt-28 w-full">
                <div className="content px-6 py-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-4xl font-light leading-tight">
                    Hey, I'm Ethan Tran. I love to experiment and solve problems
                    with React.
                  </h1>
                  <h2>Quick Links</h2>
                  <a
                    className="navbar-item"
                    href="/docs/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                  <h2>Portfolio</h2>
                  <p>WIP</p>
                  <h2>Experiments</h2>
                  <ul>
                    <li>
                      <a
                        className="navbar-item"
                        href="https://expo.io/@ethantran2/yoga-app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        "2,100 Asanas" into a Yoga App!
                      </a>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="https://expo.io/@ethantran2/emotionsapp"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        App for connecting with your emotions
                      </a>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="https://expo.io/@ethantran2/react-native-examples"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Compilation of react native examples
                      </a>
                    </li>
                  </ul>
                  <h2>Thoughts</h2>
                  <p>WIP</p>
                  <h2>Dance Monkey Dance!</h2>
                  <p>
                    <a
                      className="navbar-item"
                      href="https://www.youtube.com/watch?v=81sOzZZgBwI"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CHAIYA CHAIYA
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

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
