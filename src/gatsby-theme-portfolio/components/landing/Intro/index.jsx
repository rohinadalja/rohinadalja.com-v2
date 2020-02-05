import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Header from "components/theme/Header";
import Container from "components/common/Container";
import Button from "components/common/Button";
import DevIllustration from "components/illustrations/DevIllustration";
import { Wrapper, IntroWrapper, Details, Thumbnail } from "components/landing/Intro/styles";

export default () => {
  const {
    content: {
      frontmatter: { title, description, action, linkto }
    }
  } = useStaticQuery(graphql`
    query {
      content: markdownRemark(frontmatter: { section: { eq: "intro" } }) {
        frontmatter {
          title
          description
          action
          linkto
        }
      }
    }
  `);
  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details>
          <h1>{title}</h1>
          <h4>{description}</h4>
          <Button as={AnchorLink} href={linkto}>
            {action}
          </Button>
        </Details>
        <Thumbnail>
          <DevIllustration />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
