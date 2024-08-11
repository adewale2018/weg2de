import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import React from "react";
import { SectionHeading } from "components/misc/Headings.js";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import TeamIllustrationSrc from "images/community.svg";
import styled from "styled-components";
import tw from "twin.macro";

//eslint-disable-line

const Container = tw.section`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left mb-5`;
const Heading = tw(
  SectionHeading
)`mt-3 text-secondary-500 font-normal text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-gray-500 text-justify  text-sm md:text-base lg:text-lg font-light leading-relaxed`;

// const PrimaryButton = styled(PrimaryButtonBase)((props) => [
//   tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
//   props.buttonRounded && tw`rounded-full`,
// ]);

const MissionContainer = tw.section`
flex flex-wrap
`;
const SkewHighlightedText = tw.span`tracking-widest bg-secondary-500 text-white py-2 px-4 transform -skew-x-12 inline-block`;

const Mission = tw.p`
 my-2 text-justify text-sm md:text-base lg:text-lg font-light leading-relaxed text-gray-500
`;
const Vision = tw.p`
 mt-2 text-justify text-sm md:text-base lg:text-lg font-light leading-relaxed text-gray-500
`;

export default ({
  heading = <>About Weg2De</>,
  description = "Weg2De, formerly recognized as Study in Germany NG, has been a beacon of excellence since its establishment in 2018. Over the years, our steadfast commitment has been to facilitate seamless transitions for individuals aspiring to study and explore various opportunities in Germany.",
  imageSrc = TeamIllustrationSrc,
  imageRounded = true,
  imageBorder = false,
  imageShadow = true,
  imageCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  textOnLeft = false,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image
            css={imageCss}
            src={imageSrc}
            imageBorder={imageBorder}
            imageShadow={imageShadow}
            imageRounded={imageRounded}
          />
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
          </TextContent>
          <MissionContainer>
            <div>
              <SkewHighlightedText>Mission</SkewHighlightedText>
              <Mission>
                Our mission is to enable people to find their way in the German
                labour market. We achieve this through a wide range of language
                courses, career guidance and holistic support services.
              </Mission>
            </div>
            <div>
              <SkewHighlightedText>Vision</SkewHighlightedText>
              <Vision>
                At Weg2De, we strive to be a leading institution that helps
                people to successfully shape their educational and career paths
                in Germany.
              </Vision>
            </div>
          </MissionContainer>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
