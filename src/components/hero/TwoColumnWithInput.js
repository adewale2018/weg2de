import DesignIllustration from "../../images/online_learning.svg";
import React from "react";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
//eslint-disable-next-line
import styled from "styled-components";
import tw from "twin.macro";

const Container = tw.section`mt-32 relative`;
const TwoColumn = tw.section`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-10 md:py-20`;
const LeftColumn = tw.section`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.section`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-center`;
const Heading = tw.h1`font-medium text-4xl md:text-3xl lg:text-4xl xl:text-5xl text-secondary-500 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg text-gray-500`;
const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;
// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const ButtonsContainer = styled.div` 
  ${tw`flex lg:justify-start justify-center md:items-center my-10 flex-wrap`}
`;

const FirstButton = styled.a`
  ${tw`px-10 lg:tracking-wide sm:tracking-tighter text-sm uppercase md:px-10  bg-secondary-500 text-white font-normal my-4 sm:my-2 rounded-full py-2 md:py-6 text-center sm:leading-none focus:outline-none hover:bg-white hover:border hover:border-secondary-500 hover:text-gray-500 transition duration-300`}
`;

const SecondButton = styled.a`
  ${tw`px-10 lg:tracking-wide sm:tracking-tighter text-sm uppercase md:px-10  bg-white text-gray-500 border border-gray-500 font-normal md:mr-2 my-4 sm:my-2 rounded-full py-2 md:py-6 text-center  sm:leading-none focus:outline-secondary-500 hover:bg-secondary-500 hover:border-0 hover:text-white transition duration-300`}
`;

const HighlightedText = tw.span`text-primary-600`;

export default () => {
  return (
    <>
      <Container>
        <TwoColumn>
          <RightColumn>
            <Paragraph>
              ARBEITSKRÄFTE UND AZUBIS AUS ALLER WELT FINDEN
            </Paragraph>
            <Heading>
              Ihr Weg zu hochmotivierte{" "}
              <HighlightedText>Arbeitskräfte</HighlightedText> und{" "}
              <HighlightedText>Azubis</HighlightedText>
            </Heading>
            <ButtonsContainer>
              <SecondButton href="/unternehmen">
                Auf der Suche nach Talente?
              </SecondButton>
              <FirstButton href="/candidates">
                Looking For Opportunities in Germany?
              </FirstButton>
            </ButtonsContainer>
          </RightColumn>
          <LeftColumn>
            <IllustrationContainer>
              <img
                tw="min-w-0 w-full max-w-lg xl:max-w-3xl"
                src={DesignIllustration}
                alt="Design Illustration"
              />
            </IllustrationContainer>
          </LeftColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>
    </>
  );
};
