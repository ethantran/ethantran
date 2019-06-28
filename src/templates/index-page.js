import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
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
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;
