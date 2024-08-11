import React, { useLayoutEffect, useState } from "react";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";

import { ReactComponent as MinusIcon } from "feather-icons/dist/icons/minus.svg";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import { css } from "styled-components/macro";
//eslint-disable-line
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const TwoColumn = tw.div`flex`;
const Column = tw.div``;

const FAQContent = tw.div`lg:ml-12`;
const Subheading = tw(SubheadingBase)`mb-4 text-primary-700 text-center lg:text-left`;
const Heading = tw(
  SectionHeading
)`font-normal text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`max-w-xl text-justify md:text-left text-sm md:text-base lg:text-lg font-light leading-loose text-gray-500`;

const FAQSContainer = tw.dl`mt-12`;
const ListWrapper = tw.ul`my-5`;
const ListItem = tw.li`mt-5`;
const SubHeading = tw.h3`mt-5 text-lg lg:text-xl font-semibold`;
const Text = tw.p`leading-relaxed text-sm sm:text-base lg:text-lg mt-4 text-secondary-400`;
const QuestionDescription = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg mt-4 text-secondary-500`;

const FAQ = tw.div`cursor-pointer mt-8 select-none border-b border-secondary-200 px-8 py-4 lg:p-0`;
const Question = tw.dt`flex justify-between items-center text-primary-500`;
const QuestionText = tw.span`text-justify md:text-left text-sm md:text-base lg:text-lg font-normal leading-loose text-gray-500`;
const QuestionToggleIcon = styled.span`
  ${tw`ml-2 bg-primary-500 text-gray-100 p-1 rounded-full group-hover:bg-primary-700 group-hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const Answer = motion(
  tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed font-light text-gray-500 pb-1`
);
const Arrow = tw.span`text-primary-500 font-semibold`;

export default ({
  subheading,
  heading,
  description = "Here are some frequently asked questions about our services loving customers. Should you have any other questions, feel free to reach out via the contact.",
  faqs = null,
}) => {
  /*
   * You can modify FAQs either by modifying the below defaultFaqs array or by passing a custom array of FAQs using
   * the faqs prop
   */
  const firstAnswer = (
    <>
      <QuestionDescription>
        Unser Service bietet Ihnen Zugang zu:
      </QuestionDescription>
      <ListWrapper>
        <ListItem>
          {" "}
          <Arrow>&#8594; </Arrow> Engagierten Schulabsolventen
        </ListItem>
        <ListItem>
          {" "}
          <Arrow>&#8594; </Arrow> Erfahrenen Technikern, Handwerkern, IT-Profis,
          Hörakustikern, Audiologe und Pflegefachkräften
        </ListItem>
        <ListItem>
          {" "}
          <Arrow>&#8594; </Arrow> Qualifizierten Akademikern
        </ListItem>
        <ListItem>
          {" "}
          <Arrow>&#8594; </Arrow> Mit Deutschkenntnissen auf B1 und B2 Niveau
        </ListItem>
        <ListItem>
          {" "}
          <Arrow>&#8594; </Arrow> Aus Ländern wie Marokko, Nigeria, Türkei,
          Ruanda, Ägypten und mehr
        </ListItem>
      </ListWrapper>
      <QuestionDescription>
        Weg2De unterstützt auch bei Visumangelegenheiten und beschleunigten
        Verfahren, damit Ihre zukünftigen Mitarbeiter schnell und reibungslos
        nach Deutschland einreisen kann.
      </QuestionDescription>
    </>
  );

  const secondAnswer = (
    <>
      <Description>In 4 Schritten zu geeigneten Mitarbeiter:innen</Description>
      <>
        <SubHeading>
          {" "}
          <Arrow>&#x2022; </Arrow> Anforderungen nennen
        </SubHeading>
        <Text>
          Teilen Sie uns Ihre spezifischen Bedürfnisse und die Details der
          offenen Stelle mit, um den Prozess zu starten.
        </Text>
      </>
      <>
        <SubHeading>
          {" "}
          <Arrow>&#x2022; </Arrow> Empfehlung geeigneter Kandidaten
        </SubHeading>
        <Text>
          Basierend auf Ihren Anforderungen führen wir einen gründlichen Such-
          und Screening-Prozess durch, um den idealen Kandidaten für Ihre Rolle
          zu identifizieren.
        </Text>
      </>
      <>
        <SubHeading>
          {" "}
          <Arrow>&#x2022; </Arrow> Interview & Arbeitsvertrag{" "}
        </SubHeading>
        <Text>
          Sobald wir potenzielle Kandidaten identifiziert haben, haben Sie die
          Möglichkeit, sie zu interviewen und den besten Fit für Ihr Team
          auszuwählen.
        </Text>
      </>
      <>
        <SubHeading>
          {" "}
          <Arrow>&#x2022; </Arrow> Visum & Umzug{" "}
        </SubHeading>
        <Text>
          Nachdem Sie Ihre Auswahl getroffen haben, unterstützen wir Sie bei der
          Beantragung von Visa und erleichtern den reibungslosen Übergang Ihres
          neuen Mitarbeiters nach Deutschland.
        </Text>
      </>
    </>
  );
  const defaultFaqs = [
    {
      question:
        "Wie kann Weg2De mein Unternehmen bei der Rekrutierung helfen ?",
      answer: firstAnswer,
    },
    {
      question: "Wie kann ich mit Weg2De Rekrutieren ?",
      answer: secondAnswer,
    },
  ];

  if (!faqs || faqs.length === 0) faqs = defaultFaqs;

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <Content>
        <TwoColumn>
          <Column>
            <FAQContent>
              {subheading ? <Subheading>{subheading}</Subheading> : null}
              <Heading>{heading}</Heading>
              <Description>{description}</Description>
              <FAQSContainer>
                {faqs.map((faq, index) => (
                  <FAQ
                    key={index}
                    onClick={() => {
                      toggleQuestion(index);
                    }}
                    className="group"
                  >
                    <Question>
                      <QuestionText>{faq.question}</QuestionText>
                      <QuestionToggleIcon>
                        {activeQuestionIndex === index ? (
                          <MinusIcon />
                        ) : (
                          <PlusIcon />
                        )}
                      </QuestionToggleIcon>
                    </Question>
                    <Answer
                      variants={{
                        open: { opacity: 1, height: "auto", marginTop: "16px" },
                        collapsed: { opacity: 0, height: 0, marginTop: "0px" },
                      }}
                      initial="collapsed"
                      animate={
                        activeQuestionIndex === index ? "open" : "collapsed"
                      }
                      transition={{
                        duration: 0.3,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                    >
                      {faq.answer}
                    </Answer>
                  </FAQ>
                ))}
              </FAQSContainer>
            </FAQContent>
          </Column>
        </TwoColumn>
      </Content>
    </Container>
  );
};
