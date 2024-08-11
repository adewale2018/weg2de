import React from "react";
import { SectionHeading } from "components/misc/Headings.js";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import { css } from "styled-components/macro"; //eslint-disable-line
import styled from "styled-components";
import tw from "twin.macro";

const Container = tw.section`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto  items-center`;
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
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)(() => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Heading = tw(
  SectionHeading
)`mb-4 font-normal text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

const Description = tw.p`mt-3 leading-loose  text-sm md:text-base lg:text-lg text-gray-500 font-light text-justify `;

export default ({
  heading = " Our Team",
  imageSrc = TeamIllustrationSrc,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageDecoratorBlob = false,
  textOnLeft = true,
  decoratorBlobCss = null,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image
            src={imageSrc}
            imageBorder={imageBorder}
            imageShadow={imageShadow}
            imageRounded={imageRounded}
            style={{
              width: "80%",
              height: "80%",
              borderRadius: "50%",
              opacity: "0.5",
            }}
          />
          {imageDecoratorBlob && <DecoratorBlob css={decoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{heading}</Heading>
            <Description>
              A visionary leader at the nexus of Travel Services, Recruiting,
              and Information Technology. With a wealth of experience and a
              proven track record of success, Ishaq is the founder and
              consultant behind Weg2De. His expertise lies in optimizing
              processes and delivering strategic solutions that drive results.
              Passionate about making a difference, Ishaq is committed to
              excellence in every endeavor, ensuring unforgettable experiences
              for clients and fostering environments where talent thrives.
            </Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
