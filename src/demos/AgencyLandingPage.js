import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import Features from "components/features/DashedBorderSixFeatures";
import Footer from 'components/footers/FiveColumnWithBackground.js';
import Hero from "components/hero/BackgroundAsImage.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import React from "react";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import { css } from "styled-components/macro"; //eslint-disable-line
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import tw from "twin.macro"; //eslint-disable-line

export default () => (
  <AnimationRevealPage>
    <Hero roundedHeaderButton   />
    <MainFeature />
    <Features />
    <Testimonial
      subheading="Testimonials"
      heading={
        <>
          Our Clients Love Us.
        </>
      }
      description="Here are what some of our amazing customers are saying about our marketing professionals. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      textOnLeft={true}
    />
    <FAQ
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      subheading="FAQs"
      heading={
        <>
          Do you have <span tw="text-primary-500">Questions ?</span>
        </>
      }
    />
    <Blog />
    <Footer />
  </AnimationRevealPage>
);
