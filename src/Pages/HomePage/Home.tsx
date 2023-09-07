import { useState, useEffect } from 'react';

import { Navigations } from '../Layout/Header/Navigations';

import { DecalsImg } from './Components/DecalsImg';
import { HomeBanner } from './Components/HomeBanner';
import { JfjImg } from './Components/JfjImg';
import { ZirkelsImg } from './Components/ZirkelsImg';

import { ColumnsX } from '@components/ColumnsContainer/ColumnsX';
import { ColumnsXImg } from '@components/ColumnsContainer/ColumnsXImg';
import { ColumnsY } from '@components/ColumnsContainer/ColumnsY';
import { TwoColumnsContainer } from '@components/ColumnsContainer/TwoColumnsContainer';
import { HeaderContainers } from '@components/Containers/HeaderContainers';
import { HeaderContainersColumn } from '@components/Containers/HeaderContainersColumn';
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

  return (
    <>
      <Navigations />
      <div className="space-y-2 font-VT323">
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
          <div className="text-center mx-56">
            <div className="flex justify-center">
              <span className="text-white text-8xl hover:bg-[#e6db74] space-x-4 border w-full py-16">
                <span className="">{'{ "'}</span>
                <span className="text-[#7642B7]">graphics design</span>
                <span>{'" }'}</span>
              </span>
            </div>
            <Space />
            <div className="flex justify-center ">
              <span className="text-white text-8xl hover:bg-[#7642B7] space-x-4 border w-full py-16">
                <span className="">{'{ "'}</span>
                <span className="text-[#5ed7ff]">web design</span>
                <span>{'" }'}</span>
              </span>
            </div>
            <Space />
            <div className="flex justify-center ">
              <span className="text-white text-8xl hover:bg-[#5ed7ff] space-x-4 border w-full py-16">
                <span className="">{'{ "'}</span>
                <span className="text-[#e6db74]">full stack developer</span>
                <span>{'" }'}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
