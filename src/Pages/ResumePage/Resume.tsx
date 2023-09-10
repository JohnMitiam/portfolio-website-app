import { useState, useEffect } from 'react';

import { Footer } from '../Layout/Footer/Footer';
import { Header } from '../Layout/Header/Header';

import { TwoColumnsContainer } from '@components/ColumnsContainer/TwoColumnsContainer';
import { HeaderContainers } from '@components/Containers/HeaderContainers';
import { MainContentContainer } from '@components/Containers/MainContentContainer';
import { SubHeaderContainers } from '@components/Containers/SubHeaderContainers';
import { SubTitleContainers } from '@components/Containers/SubTitleContainers';
import { TitleAnimation } from '@components/Containers/TitleAnimation';
import { DateContent } from '@components/Contents/Dates/DateContent';
import { HomeBanner } from '@components/Contents/Images/HomeBanner';
import { ResumeSubText } from '@components/Contents/ResumeSubText';
import { Space } from '@components/Spacer/Space';

export const Resume = () => {
  const resumePhrase = ['resume'];
  const [resume, setResume] = useState('');
  const [currentResumePhraseIndex] = useState(0);
  const [currentResumeIndex, setCurrentResumeIndex] = useState(0);
  const [isPausingResume, setIsPausingResumeIndex] = useState(false);

  useEffect(() => {
    const typingInterval = 175;
    const pauseDuration = 800;

    const typedResume = () => {
      if (currentResumeIndex < resumePhrase[0].length) {
        setResume(
          (prevResumeText) =>
            prevResumeText + resumePhrase[0][currentResumeIndex]
        );
        setCurrentResumeIndex(currentResumeIndex + 1);
      } else {
        setIsPausingResumeIndex(true);

        setTimeout(() => {
          setResume('');
          setCurrentResumeIndex(0);

          setIsPausingResumeIndex(false);
        }, pauseDuration);
      }
    };

    const typingIntervalId = setInterval(typedResume, typingInterval);

    return () => clearInterval(typingIntervalId);
  }, [currentResumeIndex, currentResumePhraseIndex, isPausingResume]);

  return (
    <>
      <Header />
      <MainContentContainer>
        <TitleAnimation>{resume}</TitleAnimation>
        <SubTitleContainers>
          <ResumeSubText />
        </SubTitleContainers>
        <HomeBanner />
        <br />
        <HeaderContainers>{'<experience>'}</HeaderContainers>
        <Space />
        <SubHeaderContainers>
          ...unlocking Potential, Creating Success
        </SubHeaderContainers>
        <></>
        <TwoColumnsContainer>
          <div className="w-full col-span-1 border-t">
            <div className="grid grid-cols-3 pt-2">
              <DateContent startDate={'{Dec. 2018}'} endDate={'{June 2023}'} />
              <div className="col-span-2 text-end border-t pr-8 py-24 border-red-500">
                <span className="text-4xl text-[#7642B7]">
                  {'< havis jade construction inc. >'}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full col-span-1 border-t border-red-500"></div>
        </TwoColumnsContainer>
        <></>
      </MainContentContainer>
      <Footer />
    </>
  );
};
