import Header, {
  DesktopNavLinks,
  LogoLink,
  NavLink,
  NavLinks,
  NavToggle,
  PrimaryLink,
} from "../headers/light.js";

import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-medium tracking-wide transition duration-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-secondary-500 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
`;

const HeroContainer = tw.div`mt-32 z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const HighlightedText = tw.span`text-primary-600`;

const Heading = styled.h1`
  ${tw`font-medium text-4xl md:text-3xl lg:text-4xl xl:text-5xl text-secondary-500 leading-tight`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-500 border-l-4 border-primary-700 font-medium text-sm`;

export default ({ roundedHeaderButton }) => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/#about-us">About us</NavLink>
      <NavLink href="/unternehmen">Unternehmen</NavLink>
      <NavLink href="/candidates">Candidates</NavLink>
      <NavLink href="/akademie">Weg2De Akademie</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink
        css={roundedHeaderButton && tw`rounded-full`}
        href="/contact-us"
      >
        Contact Us
      </PrimaryLink>
    </NavLinks>,
  ];

  return (
    <Container>
      {/* <OpacityOverlay /> */}
      <HeroContainer>
        {/* <StyledHeader  links={["", ""]} /> */}
        <TwoColumn>
          <LeftColumn>
            <Heading>
              AUF DER SUCHE NACH HOCHMOTIVIERTE{" "}
              <HighlightedText>FACHKRÄFTE</HighlightedText> UND{" "}
              <HighlightedText>AZUBIS?</HighlightedText>
            </Heading>
            <Notification>Weg2De bietet die ideale Lösung!</Notification>
          </LeftColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
