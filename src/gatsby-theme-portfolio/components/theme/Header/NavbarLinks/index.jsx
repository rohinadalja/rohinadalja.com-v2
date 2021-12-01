import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from "components/theme/Header/NavbarLinks/styles"

export default ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<AnchorLink href="#projects">Projects</AnchorLink>
		<AnchorLink href="#about">About</AnchorLink>
		<a href="mailto:contact@rohinadalja.com">Contact</a>
	</Wrapper>
)
