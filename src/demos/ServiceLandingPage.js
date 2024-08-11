import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Blog from "components/blogs/GridWithFeaturedPost.js";
import FAQ from "components/faqs/SingleCol.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Features from "components/features/ThreeColWithSideImage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import GetStarted from "components/cta/GetStartedLight.js";
import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import React from "react";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import { css } from "styled-components/macro"; //eslint-disable-line
import tw from "twin.macro";

const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <FeatureStats/>
      <Features 
        heading={<>Amazing <HighlightedText>Features</HighlightedText></>}
      />
      <MainFeature
        heading={<>Cloud built by and for <HighlightedText>Professionals</HighlightedText></>}
      />
      <Testimonial 
        heading={<>Our Clients <HighlightedText>Love Us</HighlightedText></>}
      />
      <Pricing 
        heading={<>Flexible <HighlightedText>Plans</HighlightedText></>}
      />
      <FAQ
        heading={<>Any <HighlightedText>Questions ?</HighlightedText></>}
      />
      <Blog
        subheading="Blog"
        heading={<>We love <HighlightedText>Writing</HighlightedText></>}
      />
      <GetStarted/>
      <Footer />
    </AnimationRevealPage>
  );
}
