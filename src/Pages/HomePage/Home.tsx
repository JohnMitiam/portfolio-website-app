import { useState, useEffect } from 'react';

import { FooterNavigations } from '../Layout/Footer/FooterNavigations';
import { Header } from '../Layout/Header/Header';

import { DecalsImg } from './Components/DecalsImg';
import { HomeBanner } from './Components/HomeBanner';
import { HomeFooterBanner } from './Components/HomeFooterBanner';
import { JfjImg } from './Components/JfjImg';
import { ZirkelsImg } from './Components/ZirkelsImg';

import { ColumnsX } from '@components/ColumnsContainer/ColumnsX';
import { ColumnsXImg } from '@components/ColumnsContainer/ColumnsXImg';
import { ColumnsY } from '@components/ColumnsContainer/ColumnsY';
import { TwoColumnsContainer } from '@components/ColumnsContainer/TwoColumnsContainer';
import { ContactMe } from '@components/ContactUS/ContactMe';
import { HeaderContainers } from '@components/Containers/HeaderContainers';
import { HeaderContainersColumn } from '@components/Containers/HeaderContainersColumn';
import { MainContentContainer } from '@components/Containers/MainContentContainer';
import { SubHeaderContainers } from '@components/Containers/SubHeaderContainers';
import { SubHeaderContainersColumn } from '@components/Containers/SubHeaderContainersColumn';
import { AboutMeSubText } from '@components/Contents/AboutMeSubText';
import { GraphisDesignSubTexts } from '@components/Contents/GraphisDesignSubTexts';
import { PortfolioSubText } from '@components/Contents/PortfolioSubText';
import { ServicesSubText } from '@components/Contents/ServicesSubText';
import { WebDesignSubTexts } from '@components/Contents/WebDesignSubTexts';
import { ArrowDownIcon } from '@components/HeroIcons/ArrowDownIcon';
import { CenterButtons } from '@components/PrimaryButtons/CenterButtons';
import { Space } from '@components/Spacer/Space';
import { Spacer } from '@components/Spacer/Spacer';

export const Home = () => {
  const textPhrases = ['full stack developer', 'web design', 'graphics design'];
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPausing, setIsPausing] = useState(false);

  useEffect(() => {
    const typingInterval = 175;
    const pauseDuration = 800;

    const typeText = () => {
      if (currentIndex < textPhrases[currentPhraseIndex].length) {
        setTypedText(
          (prevTypedText) =>
            prevTypedText + textPhrases[currentPhraseIndex][currentIndex]
        );
        setCurrentIndex(currentIndex + 1);
      } else {
        setIsPausing(true);

        setTimeout(() => {
          setTypedText('');
          setCurrentIndex(0);

          setCurrentPhraseIndex(
            (prevIndex) => (prevIndex + 1) % textPhrases.length
          );
        }, pauseDuration);
      }
    };

    const typingIntervalId = setInterval(typeText, typingInterval);

    return () => clearInterval(typingIntervalId);
  }, [currentIndex, currentPhraseIndex, isPausing]);

  // Graphics Design
  const graphicsDesignPhrase = ['graphics design'];
  const [graphicsDesign, setGraphicsDesign] = useState('');
  const [currentGraphicsPhraseIndex] = useState(0);
  const [currentGraphicsIndex, setCurrentGraphicsIndex] = useState(0);
  const [isPausingGraphics, setIsPausingGraphicsIndex] = useState(false);

  useEffect(() => {
    const typingInterval = 175;
    const pauseDuration = 800;

    const typedGraphicsDesign = () => {
      if (currentGraphicsIndex < graphicsDesignPhrase[0].length) {
        setGraphicsDesign(
          (prevGraphicsDesignText) =>
            prevGraphicsDesignText +
            graphicsDesignPhrase[0][currentGraphicsIndex]
        );
        setCurrentGraphicsIndex(currentGraphicsIndex + 1);
      } else {
        setIsPausingGraphicsIndex(true);

        setTimeout(() => {
          setGraphicsDesign('');
          setCurrentGraphicsIndex(0);

          setIsPausingGraphicsIndex(false);
        }, pauseDuration);
      }
    };

    const typingIntervalId = setInterval(typedGraphicsDesign, typingInterval);

    return () => clearInterval(typingIntervalId);
  }, [currentGraphicsIndex, currentGraphicsPhraseIndex, isPausingGraphics]);
  // Graphics Design

  // Web Design
  const webDesignPhrase = ['web design'];
  const [webDesign, setWebDesign] = useState('');
  const [currentWebPhraseIndex] = useState(0);
  const [currentWebIndex, setCurrentWebIndex] = useState(0);
  const [isPausingWeb, setIsPausingWeb] = useState(false);

  useEffect(() => {
    const typingInterval = 175;
    const pauseDuration = 800;

    const typedWebDesign = () => {
      if (currentWebIndex < webDesignPhrase[0].length) {
        setWebDesign(
          (prevWebDesignText) =>
            prevWebDesignText + webDesignPhrase[0][currentWebIndex]
        );
        setCurrentWebIndex(currentWebIndex + 1);
      } else {
        setIsPausingWeb(true);

        setTimeout(() => {
          setWebDesign('');
          setCurrentWebIndex(0);

          setIsPausingWeb(false);
        }, pauseDuration);
      }
    };

    const typingIntervalId = setInterval(typedWebDesign, typingInterval);

    return () => clearInterval(typingIntervalId);
  }, [currentWebIndex, currentWebPhraseIndex, isPausingWeb]);
  // Web Design

  // Full Stack
  const fullStackPhrase = ['full stack developer'];
  const [fullStack, setFullStack] = useState('');
  const [currentfullStackPhraseIndex] = useState(0);
  const [currentFullStackIndex, setCurrentFullStackIndex] = useState(0);
  const [isPausingFullStack, setIsPausingFullStack] = useState(false);

  useEffect(() => {
    const typingInterval = 175;
    const pauseDuration = 800;

    const typedFullStack = () => {
      if (currentFullStackIndex < fullStackPhrase[0].length) {
        setFullStack(
          (prevFullStackText) =>
            prevFullStackText + fullStackPhrase[0][currentFullStackIndex]
        );
        setCurrentFullStackIndex(currentFullStackIndex + 1);
      } else {
        setIsPausingFullStack(true);

        setTimeout(() => {
          setFullStack('');
          setCurrentFullStackIndex(0);

          setIsPausingFullStack(false);
        }, pauseDuration);
      }
    };

    const typingIntervalId = setInterval(typedFullStack, typingInterval);

    return () => clearInterval(typingIntervalId);
  }, [currentFullStackIndex, currentfullStackPhraseIndex, isPausingFullStack]);
  // Full Stack

  return (
    <>
      <Header />
      <MainContentContainer>
        <div className="space-y-2">
          <div className="flex justify-center">
            <span className="text-white text-xl">HI I AM JOHN, A . . .</span>
          </div>
          <div className="flex justify-center">
            <span className="text-[#e6db74] text-8xl space-x-4">
              <span className="">{'{ "'}</span>
              <span className="text-white">{typedText}</span>
              <span>{'" }'}</span>
            </span>
          </div>
        </div>
        <div>
          <span className="flex justify-center font-bold text-white text-xl">
            | |
          </span>
          <span className="flex justify-center font-bold text-white text-xl">
            | |
          </span>
          <span className="flex justify-center font-bold text-white text-xl">
            <ArrowDownIcon height="50" width="50" />
          </span>
        </div>
        <HomeBanner />
        <Spacer>{'{/}'}</Spacer>
        <HeaderContainers>{'<about_me>'}</HeaderContainers>
        <SubHeaderContainers>
          <AboutMeSubText />
        </SubHeaderContainers>

        <TwoColumnsContainer>
          <>
            <ColumnsX>
              <span className="text-3xl text-white">
                …I have 6 years of experience in IT, with background in Web
                Design, Graphics Design, Hardware & Software Troubleshooting;
              </span>
            </ColumnsX>
          </>
          <>
            <ColumnsY>
              <span className="text-3xl text-[#e6db74]">
                …my IT journey has equipped me with a strong technical
                foundation, a problem-solving mindset, and a passion for
                leveraging technology to make a difference.
              </span>
            </ColumnsY>
          </>
        </TwoColumnsContainer>
        <CenterButtons to="/about">{'{read_more}'}</CenterButtons>
        <Spacer>{'(!)'}</Spacer>
        <HeaderContainers>{'<portfolio>'}</HeaderContainers>
        <SubHeaderContainers>
          <PortfolioSubText />
        </SubHeaderContainers>
        <div className="flex justify-center">
          <div className="w-full grid grid-cols-2 border-y">
            <TwoColumnsContainer>
              <ColumnsXImg>
                <DecalsImg />
              </ColumnsXImg>
              <ColumnsXImg>
                <JfjImg />
              </ColumnsXImg>
              <div className="col-span-2">
                <HeaderContainersColumn>
                  {'{graphic design}'}
                </HeaderContainersColumn>

                <SubHeaderContainersColumn>
                  <GraphisDesignSubTexts />
                </SubHeaderContainersColumn>
              </div>
            </TwoColumnsContainer>
            <div className="flex justify-center w-full pl-24 pr-16 pb-16 pt-8">
              <div className="cols-span-2">
                <div className="flex justify-center">
                  <ZirkelsImg />
                </div>
                <div className="col-span-2 pt-20">
                  <HeaderContainersColumn>
                    {'{web design}'}
                  </HeaderContainersColumn>

                  <SubHeaderContainersColumn>
                    <WebDesignSubTexts />
                  </SubHeaderContainersColumn>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-28">
          <Spacer>{'{#}'}</Spacer>
          <HeaderContainers>{'<services>'}</HeaderContainers>
          <SubHeaderContainers>
            <ServicesSubText />
          </SubHeaderContainers>
          <div className="text-center mx-44">
            <div className="flex justify-center">
              <span className="text-white text-8xl hover:bg-[#e6db74] space-x-4 border w-full py-16">
                <span className="">{'{ "'}</span>
                <span className="text-[#7642B7]">{graphicsDesign}</span>
                <span>{'" }'}</span>
              </span>
            </div>
            <Space />
            <div className="flex justify-center ">
              <span className="text-white text-8xl hover:bg-[#7642B7] space-x-4 border w-full py-16">
                <span className="">{'{ "'}</span>
                <span className="text-[#5ed7ff]">{webDesign}</span>
                <span>{'" }'}</span>
              </span>
            </div>
            <Space />
            <div className="flex justify-center ">
              <span className="text-white text-8xl hover:bg-[#5ed7ff] space-x-4 border w-full py-16">
                <span className="">{'{ "'}</span>
                <span className="text-[#e6db74]">{fullStack}</span>
                <span>{'" }'}</span>
              </span>
            </div>
          </div>
        </div>
        <Space />
        <HomeFooterBanner />
        <div className="pt-4">
          <CenterButtons to={''}>{'{all_services}'}</CenterButtons>
        </div>
        <Spacer>{'{*}'}</Spacer>
        <ContactMe />
      </MainContentContainer>
      <FooterNavigations />
    </>
  );
};
