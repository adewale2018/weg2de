import {
  SectionHeading,
  Subheading,
} from "components/misc/Headings.js";

import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import React from "react";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import styled from "styled-components";
import tw from "twin.macro";

const Container = tw.div`relative`;
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

const PrimaryButton = styled(PrimaryButtonBase)((props) => [
  tw`mt-12 bg-secondary-500 uppercase tracking-widest font-light text-sm inline-block mx-auto md:mx-0 hover:bg-secondary-700`,
  props.buttonRounded && tw`rounded-full`,
]);

function GermanLanguagePage({
  subheading,
  heading,
  description = "Discover German language and orientation courses tailored to your specific travel objectives at Weg2De Akademie. Explore our offerings based on the purpose of your journey to Germany by clicking the link below.",
  primaryButtonText = "Enroll Now",
  primaryButtonUrl = "/german-online-group-course",
  imageSrc,
  buttonRounded = true,
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
          {showDecoratorBlob && <DecoratorBlob />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          {/* <TextContent> */}
            <Subheading>{subheading}</Subheading>
            <SectionHeading>{heading}</SectionHeading>
            <SectionDescription>{description}</SectionDescription>
            <PrimaryButton
              buttonRounded={buttonRounded}
              as="a"
              href={primaryButtonUrl}
            >
              {primaryButtonText}
            </PrimaryButton>
          {/* </TextContent> */}
        </TextColumn>
      </TwoColumn>
    </Container>
  );
}

export default GermanLanguagePage;
