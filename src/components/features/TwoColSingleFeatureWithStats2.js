import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";

import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import React from "react";
import StatsIllustrationSrc from "images/collaboration.svg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import { css } from "styled-components/macro"; //eslint-disable-line
import styled from "styled-components";
import tw from "twin.macro";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-1/2`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mb-4 font-normal text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

const Description = tw.p`mt-3 leading-loose  text-sm md:text-base lg:text-lg text-gray-500 font-light text-justify `;

const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

export default ({
  subheading = "Über Uns",
  imageSrc = StatsIllustrationSrc,
  imageCss = null,
  imageContainerCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  imageInsideDiv = true,
  textOnLeft = false,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects

  return (
    <Container>
      <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
        <ImageColumn css={imageContainerCss}>
          {imageInsideDiv ? (<>
            <Image imageSrc={imageSrc} css={imageCss} />
            <Description>
              Wenn Sie nach hochqualifizierten Fachkräften suchen, stehen wir
              Ihnen gerne zur Verfügung. Lassen Sie uns zusammenarbeiten, um
              Ihre Ziele zu erreichen und Ihr Unternehmen auf das nächste Level
              zu bringen.
            </Description></>
          ) : (
            <img src={imageSrc} css={imageCss} alt="" />
          )}
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        </ImageColumn>

        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Heading>{subheading}</Heading>}
            <Description>
              Seit 2018 bürgt Weg2De für erstklassige Qualität. Als Experte auf
              dem Gebiet der Personalvermittlung haben wir auf die Vermittlung
              von Auszubildenden in allen Ausbildungsberufen, Pflegefachkräften,
              Handwerkern, Technikern, IT-Profis und Hörakustikern aus aller
              Welt spezialisiert.
            </Description>
            <Description>
              Mit einem tiefgreifenden Verständnis der Anforderungen und
              Herausforderungen des Arbeitsmarktes stehen wir Unternehmen und
              Bewerbern gleichermaßen zur Seite. Unser Ziel ist es, die perfekte
              Passform zwischen talentierten Fachkräften und Unternehmen zu
              schaffen, um langfristigen Erfolg sicherzustellen.
            </Description>
            <Description>
              Darüber hinaus bieten wir professionelle Unterstützung bei
              Visumverfahren und Umzügen von Fachkräften sowie Auszubildenden
              nach Deutschland und DACH Gebiet. Unser umfassendes Netzwerk und
              Erfahrung ermöglichen es uns, einen reibungslosen und effizienten
              Übergang für alle Beteiligten zu gewährleisten.
            </Description>
            {/* <Description>
              Wenn Sie nach hochqualifizierten Fachkräften suchen, stehen wir
              Ihnen gerne zur Verfügung. Lassen Sie uns zusammenarbeiten, um
              Ihre Ziele zu erreichen und Ihr Unternehmen auf das nächste Level
              zu bringen.
            </Description> */}
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
