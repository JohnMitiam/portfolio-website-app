import { useState, useEffect } from 'react';

import { Footer } from '../Layout/Footer/Footer';
import { Header } from '../Layout/Header/Header';

import { MainContentContainer } from '@components/Containers/MainContentContainer';
import { SubTitleContainers } from '@components/Containers/SubTitleContainers';
import { TitleAnimationPages } from '@components/Containers/TitleAnimationPages';
import { AboutMeSubText } from '@components/Contents/AboutMeSubText';
import { HomeBanner } from '@components/Contents/Images/HomeBanner';
import { HeaderContainers } from '@components/Containers/HeaderContainers';
import { TwoColumnsContainer } from '@components/ColumnsContainer/TwoColumnsContainer';
import { ColumnsX } from '@components/ColumnsContainer/ColumnsX';
import { ColumnsY } from '@components/ColumnsContainer/ColumnsY';
import { Space } from '@components/Spacer/Space';
import { FourXFourColumn } from '@components/ColumnsContainer/FourXFourColumn';
import { HomeFooterBanner } from '@components/Contents/Images/HomeFooterBanner';
import { Spacer } from '@components/Spacer/Spacer';
import { ContactMe } from '@components/ContactUS/ContactMe';

export const About = () => {
  const aboutMePhrase = ['about_me'];
  const [aboutMe, setAboutMe] = useState('');
  const [currentAboutMePhraseIndex] = useState(0);
  const [currentAboutMeIndex, setCurrentAboutMeIndex] = useState(0);
  const [isPausingAboutMe, setIsPausingAboutMeIndex] = useState(false);

  useEffect(() => {
    const typingInterval = 175;
    const pauseDuration = 800;

    const typedAboutMe = () => {
      if (currentAboutMeIndex < aboutMePhrase[0].length) {
        setAboutMe(
          (prevAboutMeText) =>
            prevAboutMeText + aboutMePhrase[0][currentAboutMeIndex]
        );
        setCurrentAboutMeIndex(currentAboutMeIndex + 1);
      } else {
        setIsPausingAboutMeIndex(true);

        setTimeout(() => {
          setAboutMe('');
          setCurrentAboutMeIndex(0);

          setIsPausingAboutMeIndex(false);
        }, pauseDuration);
      }
    };

    const typingIntervalId = setInterval(typedAboutMe, typingInterval);

    return () => clearInterval(typingIntervalId);
  }, [currentAboutMeIndex, currentAboutMePhraseIndex, isPausingAboutMe]);

  return (
    <>
      <Header />
      <MainContentContainer>
        <TitleAnimationPages>{aboutMe}</TitleAnimationPages>
        <SubTitleContainers>
          <AboutMeSubText />
        </SubTitleContainers>
        <HomeBanner />
        <br />
        <HeaderContainers>{'<what derives my work>'}</HeaderContainers>
        <Space />
        <FourXFourColumn
          upLeftSym={'{/}'}
          upLeftTitle={'_team work'}
          upLeftContent={
            '…embracing collaboration, pooling diverse strengths, and working together towards a common goal, forging a bond that fuels innovation and achieves remarkable results..'
          }
          upRightSym={'{!}'}
          upRightTitle={'_innovation'}
          upRightContent={
            '…constantly pushing boundaries, challenging the status quo, and daring to explore new possibilities, as we pave the way for transformative solutions that shape the future.'
          }
          lowLeftSym={'{#}'}
          lowLeftTitle={'_excellence'}
          lowLeftContent={
            '…consistently striving for the highest standards, relentlessly pursuing improvement, and delivering exceptional results that surpass expectations, setting a benchmark for success.'
          }
          lowRightSym={'{%}'}
          lowRightTitle={'_hard work'}
          lowRightContent={
            '…embracing challenges, putting in the extra effort, and persevering with unwavering determination, as we relentlessly pursue our goals and strive for personal and professional growth.'
          }
        />
        <Space />
        <HomeFooterBanner />
        <Spacer>{'{*}'}</Spacer>
        <ContactMe />
      </MainContentContainer>
      <Footer />
    </>
  );
};
