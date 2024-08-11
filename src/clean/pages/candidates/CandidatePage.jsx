import { portfolioServiceOne, portfolioServiceTwo } from "clean/data/dummyData";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import ApprenticeshipPage from "./Apprenticeship";
import CandidateLanding from "./CandidateLanding";
import FooterPage from "clean/components/Footer";
import GermanLanguagePage from "../home/GermanLanguage";
import React from "react";
import ServicePortfolioPage from "./ServicePortfolio";
import apprenticeshipImageSrc from "../../../images/coworking.svg";
import prototypeIllustrationImageSrc from "../../../images/education.svg";
import tw from "twin.macro";

const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;

function CandidatesPage() {
  return (
    <AnimationRevealPage>
      <CandidateLanding
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={true}
      />
      <ServicePortfolioPage
        heading="Portfolio Service"
        data={portfolioServiceOne}
      />
      <br />
      <ServicePortfolioPage data={portfolioServiceTwo} />
      <br />
      <ApprenticeshipPage
        imageSrc={apprenticeshipImageSrc}
        showDecoratorBlob={true}
      />
      <GermanLanguagePage
        subheading='German Language'
        heading='Learn German with us Today'
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={true}
      />
      <FooterPage />
    </AnimationRevealPage>
  );
}

export default CandidatesPage;
