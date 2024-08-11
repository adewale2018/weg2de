import AboutCompany from "./AboutCompany";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import CompanyLanding from "./Landing";
import CompanyServicesPage from "./CompanyServices";
import CompanyTestimonialPage from "./CompanyTestimonial";
import FaqPage from "clean/components/FAQ";
import FooterPage from "clean/components/Footer";
import React from "react";
import customerSupportIllustrationSrc from "../../../images/customer-support-illustration.svg";
import { defaultTestimonials } from "clean/data/dummyData";

function CompaniesPage() {
  return (
    <AnimationRevealPage>
      <CompanyLanding />
      <AboutCompany />
      <CompanyServicesPage />
      <CompanyTestimonialPage
        subheading="Testimonials"
        heading='Our Clients Love Us.'
        description="Here are what some of our amazing customers are saying about our marketing professionals. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        textOnLeft={false}
        testimonials={defaultTestimonials}
      />
      <FaqPage
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
      <FooterPage />
    </AnimationRevealPage>
  );
}

export default CompaniesPage;
