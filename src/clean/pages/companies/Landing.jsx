// const HighlightedText = tw.span`text-primary-600`;
// const HighlightedText = tw.span`text-primary-600`;
import { HighlightedText, MainHeading } from "components/misc/Headings";

import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.section`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
`;

const HeroContainer = tw.section` mt-32 z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.section`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.section`flex flex-col items-center lg:block`;
const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-500 border-l-4 border-primary-700 font-medium text-sm`;

function CompanyLanding() {
  return (
    <Container>
      <HeroContainer>
        <TwoColumn>
          <LeftColumn>
            <MainHeading>
              AUF DER SUCHE NACH HOCHMOTIVIERTE <br />
              <HighlightedText>FACHKRÄFTE</HighlightedText> UND{" "}
              <HighlightedText>AZUBIS?</HighlightedText>
            </MainHeading>
            <Notification>Weg2De bietet die ideale Lösung!</Notification>
          </LeftColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
}

export default CompanyLanding;
