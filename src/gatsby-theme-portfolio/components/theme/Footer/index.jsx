import React from "react";
import { defaultTitle } from "data";
import Container from "components/common/Container";
// import Social from "./Social";
import { Wrapper, Flex, Details } from "components/theme/Footer/styles";

export default () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>{defaultTitle}</h2>
        <span>
          © {new Date().getFullYear()} | Developer:{" "}
          <a
            href="mailto:contact@rohinadalja.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Rohin Adalja
          </a>
        </span>
      </Details>
      {/* <Social /> */}
    </Flex>
  </Wrapper>
);
