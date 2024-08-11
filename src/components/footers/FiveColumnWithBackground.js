import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as FeedIcon } from "images/feed.svg";
import { ReactComponent as InstagramIcon } from "images/instagram.svg";
import LogoImage from "images/logo-white.png";
import React from "react";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import { ReactComponent as TwitterIcon } from "images/xicon.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube-icon.svg";
//eslint-disable-line
import styled from "styled-components";
import tw from "twin.macro";

const Container = tw.footer`relative bg-secondary-500 text-white -mb-8 -mx-8 px-8 py-20 lg:py-24`;
const Content = tw.section`max-w-screen-xl mx-auto relative z-10`;
const FiveColumns = tw.section`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/3 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold`;

const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300`;

const Divider = tw.div`my-16 border-b-2 border-gray-100 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-20`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-100`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 tracking-wider font-light text-white`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-white text-gray-900 hover:bg-gray-200 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute top-0 left-0 w-80 h-80 transform -translate-x-20 -translate-y-32 text-secondary-700 opacity-50`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob1
)`absolute bottom-0 right-0 w-80 h-80 transform  translate-x-32 translate-y-48 text-secondary-700 opacity-50`;

export default () => {
  return (
    <Container>
      <Content>
        <FiveColumns>
          <Column>
            <ColumnHeading>Main</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Blog</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">FAQs</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Product</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Business</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Team</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Press</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Logos</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Events</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Team</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Career</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Culture</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Legal</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Terms of Service</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Disclaimer</Link>
              </LinkListItem>
            </LinkList>
          </Column>
        </FiveColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoImg src={LogoImage} style={{width: '200px'}} />
          </LogoContainer>
          <CopywrightNotice>&copy; {new Date().getFullYear()} Weg2De International Company Ltd. All Rights Reserved.</CopywrightNotice>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com/weg2de" target="_blank">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://x.com/weg2de" target="_blank">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/weg2de" target="_blank">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="https://weg2de.com/feed" target="_blank">
              <FeedIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com" target="_blank">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
      <DecoratorBlobContainer>
        <DecoratorBlob1 />
        <DecoratorBlob2 />
      </DecoratorBlobContainer>
    </Container>
  );
};
