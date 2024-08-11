import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import FAQIMG from "../images/ishaq.webp";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Footer from "components/footers/FiveColumnWithBackground.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import React from "react";
import heroScreenshotImageSrc from "images/community.svg";
import macHeroScreenshotImageSrc from "images/ishaq.webp";
import prototypeIllustrationImageSrc from "images/education.svg";
import tw from "twin.macro";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton />
      <MainFeature
        subheading={<Subheading></Subheading>}
        imageSrc={heroScreenshotImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
      />

      <FeatureWithSteps
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <MainFeature2
        subheading={<Subheading>German Language</Subheading>}
        heading={<>Learn German with us Today</>}
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={true}
      />
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading="You have Questions ?"
        imageSrc={FAQIMG}
        faqs={[
          {
            question: "First question will be here ?",
            answer:
              "Yes, they all are. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
          {
            question: "Second question will be here ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
          {
            question: "Another question will be here ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
          {
            question: "One more question will be here ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
          {
            question: "And one more and one more question will be here ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
