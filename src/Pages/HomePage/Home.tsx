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
import { ArrowDownIcon } from '@components/HeroIcons/ArrowDownIcon';
import { CenterButtons } from '@components/PrimaryButtons/CenterButtons';
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
          …Embracing Curiosity, Igniting Creativity, and Inspiring Connection
          for a Transformed World.
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
          …Elevating Possibilities through Technology: Showcasing Innovation,
          Expertise, and Impact.
        </SubHeaderContainers>
        <div className="flex justify-center">
          <div className="w-full grid grid-cols-2">
            <TwoColumnsContainer>
              <ColumnsXImg>
                <DecalsImg />
              </ColumnsXImg>
              <ColumnsXImg>
                <JfjImg />
              </ColumnsXImg>
              <div className="col-span-2">
                <div className="flex justify-center">
                  <HeaderContainersColumn>
                    {'{graphic design}'}
                  </HeaderContainersColumn>
                </div>
                <div>
                  <span>
                    {
                      '{//…I am driven by the limitless possibilities of visual communication.With a blend of creativity, technical expertise, and a keen eye for aesthetics, I specialize in bringing ideas to life through stunning design solutions.}'
                    }
                  </span>
                </div>
              </div>
            </TwoColumnsContainer>
            <div className="flex justify-center w-full pl-24 pr-16 pb-16 pt-8 border-t col-span-1">
              <div className="cols-span-2">
                <ZirkelsImg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
