import "slick-carousel/slick/slick.css";

import React, { useState } from "react";
import {
  SectionHeading,
  Subheading,
} from "../../../components/misc/Headings.js";

import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import { PrimaryButton } from "../../../components/misc/Buttons.js";
import { ReactComponent as QuotesLeftIcon } from "../../../images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "../../../images/quotes-r.svg";
import Slider from "react-slick";
import { ReactComponent as SvgDecoratorBlob1 } from "../../../images/svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../../images/svg-decorator-blob-5.svg";
import styled from "styled-components";
import tw from "twin.macro";

const Container = tw.section`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const TestimonialsContainer = tw.div`mt-16 lg:mt-0`;
const Testimonials = styled.div``;
const Testimonial = tw.div`max-w-md lg:max-w-none mx-auto lg:mx-0 flex flex-col items-center lg:items-stretch lg:flex-row`;

const TestimonialImageSlider = tw(Slider)`w-full lg:w-5/12 flex-shrink-0 `;
const TestimonialTextSlider = tw(Slider)``;
const TestimonialText = tw.div`outline-none`;

const ImageAndControlContainer = tw.div`relative outline-none`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-80 sm:h-96 lg:h-144`,
]);

const ControlContainer = tw.div`absolute bottom-0 right-0 bg-gray-100 px-6 py-4 rounded-tl-3xl border`;
const ControlButton = styled(PrimaryButton)`
  ${tw`mx-3 rounded-full text-gray-100 p-2`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const TextContainer = styled.div((props) => [
  tw`flex flex-col w-full lg:w-7/12 mt-5 md:mt-0`,
  props.textOnLeft ? tw`lg:pr-12 lg:order-first` : tw`lg:pl-12 lg:order-last`,
]);

const Description = tw.p`max-w-md text-justify mx-auto lg:mx-0 lg:text-justify lg:max-w-none leading-loose text-sm sm:text-base lg:text-lg font-light mt-2 text-gray-500`;
const QuoteContainer = tw.div`relative mt-10 lg:mt-20`;
const Quote = tw.blockquote`text-center font-thin lg:text-left text-sm sm:text-lg lg:text-xl xl:text-2xl`;
const CustomerInfo = tw.div`mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start`;
const CustomerProfilePicture = tw.img`rounded-full w-20 h-20`;
const CustomerTextInfo = tw.div`text-center lg:text-left sm:ml-6 mt-2 sm:mt-0`;
const CustomerName = tw.h5`font-light text-xl lg:text-2xl xl:text-3xl text-gray-500`;
const CustomerTitle = tw.p`font-normal text-sm text-secondary-500`;

const QuotesLeft = tw(
  QuotesLeftIcon
)`w-6 h-6 text-sm  text-secondary-500 inline-block mr-1 -mt-3`;
const QuotesRight = tw(
  QuotesRightIcon
)`w-6 h-6 text-sm text-secondary-500 inline-block ml-1 -mt-3`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 -z-10 text-primary-500 opacity-25 transform -translate-x-full`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 -z-10 text-primary-300 opacity-15 transform translate-x-2/3 translate-y-8`;

function CompanyTestimonialPage({
  subheading,
  heading,
  description,
  testimonials,
  textOnLeft,
}) {
  /*
   * You can modify the testimonials shown by modifying the array below or passing in the testimonials prop above
   * You can add or remove objects from the array as you need.
   */

  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [imageSliderRef, setImageSliderRef] = useState(null);
  const [textSliderRef, setTextSliderRef] = useState(null);

  return (
    <Container>
      <Content>
        <TestimonialsContainer>
          <Testimonials>
            <Testimonial>
              <TestimonialImageSlider
                arrows={false}
                ref={setImageSliderRef}
                asNavFor={textSliderRef}
                fade={true}
              >
                {testimonials?.map((testimonial, index) => (
                  <ImageAndControlContainer key={index}>
                    <Image imageSrc={testimonial.imageSrc} />
                    <ControlContainer>
                      <ControlButton onClick={imageSliderRef?.slickPrev}>
                        <ChevronLeftIcon />
                      </ControlButton>
                      <ControlButton onClick={imageSliderRef?.slickNext}>
                        <ChevronRightIcon />
                      </ControlButton>
                    </ControlContainer>
                  </ImageAndControlContainer>
                ))}
              </TestimonialImageSlider>
              <TextContainer textOnLeft={textOnLeft}>
                <HeadingInfo
                  tw="hidden lg:block"
                  subheading={subheading}
                  heading={heading}
                  description={description}
                />
                <TestimonialTextSlider
                  arrows={false}
                  ref={setTextSliderRef}
                  asNavFor={imageSliderRef}
                  fade={true}
                >
                  {testimonials.map((testimonial, index) => (
                    <TestimonialText key={index}>
                      <QuoteContainer>
                        <Quote>
                          <QuotesLeft />
                          {testimonial.quote}
                          <QuotesRight />
                        </Quote>
                      </QuoteContainer>
                      <CustomerInfo>
                        <CustomerProfilePicture
                          src={testimonial.profileImageSrc}
                          alt={testimonial.customerName}
                        />
                        <CustomerTextInfo>
                          <CustomerName>
                            {testimonial.customerName}
                          </CustomerName>
                          <CustomerTitle>
                            {testimonial.customerTitle}
                          </CustomerTitle>
                        </CustomerTextInfo>
                      </CustomerInfo>
                    </TestimonialText>
                  ))}
                </TestimonialTextSlider>
              </TextContainer>
            </Testimonial>
          </Testimonials>
        </TestimonialsContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
}

const HeadingInfo = ({ subheading, heading, description, ...props }) => (
  <div {...props}>
    {subheading ? <Subheading>{subheading}</Subheading> : null}
    <SectionHeading>{heading}</SectionHeading>
    <Description>{description}</Description>
  </div>
);

export default CompanyTestimonialPage;
