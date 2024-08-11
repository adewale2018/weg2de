import CustomizeIconImage from "../../images/education.svg";
import React from "react";
import ReliableIconImage from "../../images/advice.svg";
import { SectionHeading } from "components/misc/Headings.js";
import ShieldIconImage from "../../images/recruitment.svg";
import SupportIconImage from "../../images/plane.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";
//eslint-disable-next-line
import styled from "styled-components";
import tw from "twin.macro";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`mb-10 flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto`}
`;
const Heading = tw(
  SectionHeading
)`mt-10 font-normal text-center text-3xl sm:text-4xl lg:text-5xl text-center md:text-center leading-tight`;


const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/4 px-6 flex`}
`;

const Card = styled.div`
  ${tw`z-20 cursor-pointer flex flex-col mx-auto max-w-xs items-center px-6 py-10 border border-gray-100 shadow-raised rounded-lg mt-12`}
  .imageContainer {
    ${tw`text-center rounded-full px-6 flex-shrink relative`}
    img {
      ${tw`h-20`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-medium text-xl leading-none text-primary-700`}
  }

  .description {
    ${tw`mt-3 font-normal text-gray-500 text-sm text-justify leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;


export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Rekrutierung",
      description: "Egal ob Ausbildungsplatz, Arbeitsstelle oder Freiwilligendienst, wir unterstützen Sie dabei, die passenden Kandidaten zu finden."
    },
    { imageSrc: SupportIconImage, title: "Visum & Umzug", description: "Wir bieten umfassende Unterstützung bei der Beantragung von Visa und der Organisation des Umzugs für Ihre ausländischen Mitarbeiter." },
    { imageSrc: CustomizeIconImage, title: "Sprachtraining", description: "Wir bieten Deutschkurse von A1 bis B2-Niveau und Integrationskurse an , um Ihren Mitarbeitern die Integration und Kommunikation im deutschen Arbeitsumfeld zu erleichtern." },
    { imageSrc: ReliableIconImage, title: "Beratung", description: "Möchten Sie mehr über die Beschäftigung ausländischer Mitarbeiter erfahren? Kontaktieren Sie uns für eine umfassende Beratung." },
  ];

  return (
    <Container>
       <Heading>Dienstleistungen</Heading>
      <ThreeColumnContainer>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title}</span>
                <p className="description">
                  {card.description}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
