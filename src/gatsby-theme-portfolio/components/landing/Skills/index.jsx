import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Container from "components/common/Container";
import Button from "components/common/Button";
import SkillIllustration from "components/illustrations/SkillIllustration";
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "components/landing/Skills/styles";

export default () => {
  const {
    content: {
      frontmatter: { title, description, action1, linkto1, action2, linkto2, action3, linkto3, subtext, skills1, skills2, skills3 }
    }
  } = useStaticQuery(graphql`
    query {
      content: markdownRemark(frontmatter: { section: { eq: "about" } }) {
        frontmatter {
          title
          description
          action1
          linkto1
          action2
          linkto2
          action3
          linkto3
          subtext
          skills1
          skills2
          skills3
        }
      }
    }
  `);
  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <SkillIllustration />
        </Thumbnail>
        <Details>
          <h1>{title}</h1>
          <p>{description}</p>
          <Button as={AnchorLink} href={linkto1}>
            {action1}
          </Button>
          <h2></h2>
          <h1><br></br></h1>
          <h2>{subtext}</h2>
          <div>{skills1}</div>
          <div>{skills2}</div>
          <div>{skills3}</div>
          <h3></h3>
          <Button as={AnchorLink} href={linkto2}>
            {action2}
          </Button><em> </em>
          <Button as={AnchorLink} href={linkto3}>
            {action3}
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
