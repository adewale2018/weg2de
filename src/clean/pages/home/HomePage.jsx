// import A from '../../../images/';
import AboutPage from "./About";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import FAQIMG from "../../../images/ishaq.webp";
import FaqPage from "clean/components/FAQ";
import FooterPage from "clean/components/Footer";
import GermanLanguagePage from "./GermanLanguage";
import LandingPage from "./LandingPage";
import React from "react";
import TeamPage from "./Team";
import { homepageFaqs } from "clean/data/dummyData";
import macHeroScreenshotImageSrc from "../../../images/ishaq.webp";
import prototypeIllustrationImageSrc from "../../../images/education.svg";
import tw from "twin.macro";

const HomePage = () => {
  return (
    <AnimationRevealPage>
      <LandingPage />
      <AboutPage />
      <TeamPage
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <GermanLanguagePage
        subheading='German Language'
        heading='Learn German with us Today'
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={true}
      />
      <FaqPage
        subheading='FAQS'
        heading="You have Questions ?"
        imageSrc={FAQIMG}
        faqs={homepageFaqs}
      />
      <FooterPage />
    </AnimationRevealPage>
  );
};

export default HomePage;
