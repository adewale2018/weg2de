import { SectionHeading, Subheading } from "components/misc/Headings.js";

import CustomerCount from "clean/components/CountUp";
import React from "react";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as SvgDotPattern } from "../../../images/dot-pattern.svg";
import styled from "styled-components";
import tw from "twin.macro";

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
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = tw(
  SvgDotPattern
)`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-secondary-500 -z-10`;

const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const CounterWrapper = tw.section`mt-4 font-normal flex flex-wrap justify-around`;

function ApprenticeshipPage({
  subheading = "About weg2de apprenticeship program",
  heading = "Our Apprenticeship Program",
  description = "The Weg2De Apprenticeship Program is a comprehensive and meticulously structured initiative, meticulously designed to equip participants with the essential skills and knowledge required for a successful transition into the German workforce. This preparatory program spans two semesters, each focusing on key components essential for participants’ readiness and efficacy in pursuing an Ausbildung program.",
  imageSrc,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  showDecoratorBlob = false,
  textOnLeft = true,
}) {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  /*
   * Change the features variable as you like, add or delete objects
   * `icon` must be a React SVG component. See how BriefcaseIcon is imported above. For a full list of available icons, see Feather Icons.
   */

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image
            src={imageSrc}
            imageBorder={imageBorder}
            imageShadow={imageShadow}
            imageRounded={imageRounded}
          />
          {/* {showDecoratorBlob && <DecoratorBlob />} */}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <SectionHeading>{heading}</SectionHeading>
            <SectionDescription>{description}</SectionDescription>
          </TextContent>
        </TextColumn>
      </TwoColumn>
      <CounterWrapper>
        <CustomerCount
          startCount={0}
          endCount={50}
          countDuration={15}
          title="Students"
        />
        <CustomerCount
          startCount={0}
          endCount={25}
          countDuration={15}
          title="Graduates"
        />
        <CustomerCount
          startCount={0}
          endCount={2}
          countDuration={15}
          title="Semesters"
        />
        <CustomerCount
          startCount={0}
          endCount={10}
          countDuration={15}
          title="Courses"
        />
      </CounterWrapper>
    </Container>
  );
}

export default ApprenticeshipPage;
