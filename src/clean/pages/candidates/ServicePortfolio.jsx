import { SectionHeading, Subheading } from "components/misc/Headings.js";

import React from "react";
import { ReactComponent as SvgDecoratorBlob1 } from "../../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../../images/svg-decorator-blob-3.svg";
import styled from "styled-components";
import tw from "twin.macro";

const Container = tw.div`relative`;
const Content = tw.div` max-w-screen-xl mx-auto `;
const ThreeColumn = tw.div`border-gray-200 rounded shadow-xl flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-10 mb-10 lg:w-1/3`;

const HeadingInfoContainer = tw(SectionHeading)`md:text-center`;
const Heading = tw(SectionHeading)` text-center mt-10 -mb-5`;
const Card = tw.div` lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`,
]);

const Details = tw.div`border border-t-0 border-gray-100 p-6 rounded rounded-t-none flex-1 flex flex-col items-center text-center lg:block lg:text-left`;

const Title = tw.h5`mt-4 text-center font-medium text-lg text-primary-700 uppercase`;
const Description = tw.p`mt-2 text-justify text-sm text-gray-500 leading-loose`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

function ServicePortfolioPage({ heading, data }) {
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          {heading && <SectionHeading>{heading}</SectionHeading>}
        </HeadingInfoContainer>
        <ThreeColumn>
          {data?.map((info, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={info?.imageSrc} />
                <Details>
                  <Title>{info?.title}</Title>
                  <Description>{info?.description}</Description>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
}

export default ServicePortfolioPage;
