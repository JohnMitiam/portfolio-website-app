/* eslint-disable import/no-unresolved */
import { useState, useEffect } from 'react';

import { Footer } from '../Layout/Footer/Footer';
import { Header } from '../Layout/Header/Header';

import { DateAndJobContainerXColumnLeft } from '@components/ColumnsContainer/DateAndJobContainerXColumnLeft';
import { FourXFourColumn } from '@components/ColumnsContainer/FourXFourColumn';
import { JobDescriptionXColumnRight } from '@components/ColumnsContainer/JobDescriptionXColumnRight';
import { SkillsColumnsContainer } from '@components/ColumnsContainer/SkillsColumnsContainer';
import { ContactMe } from '@components/ContactUS/ContactMe';
import { HeaderContainers } from '@components/Containers/HeaderContainers';
import { JobAndSkillsAnimation } from '@components/Containers/JobAndSkillsAnimation';
import { MainContentContainer } from '@components/Containers/MainContentContainer';
import { OnTheJobAndSkillsAnimation } from '@components/Containers/OnTheJobAndSkillsAnimation';
import { PositionTitle } from '@components/Containers/PositionTitle';
import { Skills } from '@components/Containers/Skills';
import { SKillsContainer } from '@components/Containers/SkillsContainer';
import { SubHeaderContainers } from '@components/Containers/SubHeaderContainers';
import { SubTitleContainers } from '@components/Containers/SubTitleContainers';
import { TitleAnimationPages } from '@components/Containers/TitleAnimationPages';
import { Havis } from '@components/Contents/Animated/Havis';
import { Perpetual } from '@components/Contents/Animated/Perpetual';
import { TopPeg } from '@components/Contents/Animated/topPeg';
import { DateContent } from '@components/Contents/Dates/DateContent';
import { HomeBanner } from '@components/Contents/Images/HomeBanner';
import { ResumeSubText } from '@components/Contents/ResumeSubText';
import { Space } from '@components/Spacer/Space';
import { Spacer } from '@components/Spacer/Spacer';

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
        <TitleAnimationPages>{resume}</TitleAnimationPages>
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
        <SkillsColumnsContainer>
          <DateAndJobContainerXColumnLeft>
            <DateContent startDate={'{Dec. 2018}'} endDate={'{June 2023}'} />
            <JobAndSkillsAnimation>
              <Havis />
            </JobAndSkillsAnimation>
          </DateAndJobContainerXColumnLeft>
          <JobDescriptionXColumnRight>
            <PositionTitle>
              {'// Admin Staff; // Project Coordinator; // Safety Officer'}
            </PositionTitle>
            <SKillsContainer>
              <Skills>
                {'<managing administrative tasks & duties for the team>'}
              </Skills>
              <Skills>
                {'<coordinating any concerns inside the project site>'}
              </Skills>
              <Skills>
                {'<project in-charge for the specified project undertaken>'}
              </Skills>
              <Skills>
                {'<maintaining team'}
                {"'s"}
                {' safety protocol inside the project site>'}
              </Skills>
            </SKillsContainer>
          </JobDescriptionXColumnRight>
        </SkillsColumnsContainer>
        <></>
        <HeaderContainers>{'<on-the-job training>'}</HeaderContainers>
        <div>
          <SkillsColumnsContainer>
            <DateAndJobContainerXColumnLeft>
              <DateContent startDate={'{Aug. 2016}'} endDate={'{Sept. 2016}'} />
              <OnTheJobAndSkillsAnimation>
                <TopPeg />
              </OnTheJobAndSkillsAnimation>
            </DateAndJobContainerXColumnLeft>
            <JobDescriptionXColumnRight>
              <PositionTitle>{'//Visual Graphics Designer'}</PositionTitle>
              <SKillsContainer>
                <Skills>
                  {
                    '<Collaborating with internal teams to define user interface requirements>'
                  }
                </Skills>
              </SKillsContainer>
            </JobDescriptionXColumnRight>
          </SkillsColumnsContainer>
          <SkillsColumnsContainer>
            <DateAndJobContainerXColumnLeft>
              <DateContent startDate={'{Aug. 2016}'} endDate={'{Sept. 2016}'} />
              <OnTheJobAndSkillsAnimation>
                <Perpetual />
              </OnTheJobAndSkillsAnimation>
            </DateAndJobContainerXColumnLeft>
            <JobDescriptionXColumnRight>
              <PositionTitle>{'//IT Services Department'}</PositionTitle>
              <SKillsContainer>
                <Skills>{'<Service Call>'}</Skills>
                <Skills>{'<Printer Sharing>'}</Skills>
                <Skills>
                  {'<Computer Hardware/Software Troubleshooting>'}
                </Skills>
              </SKillsContainer>
            </JobDescriptionXColumnRight>
          </SkillsColumnsContainer>
        </div>
        <HeaderContainers>{'<skills'}</HeaderContainers>
        <SubHeaderContainers>
          …In search of good growth opportunities with a chance for professional
          challenge by giving my hardwork and flexibility with inspiring
          performance
        </SubHeaderContainers>
        <FourXFourColumn
          upLeftSym={'{/}'}
          upLeftTitle="_computer & hardware services"
          upLeftContent="…technical solutions and support aimed at ensuring the smooth operation, maintenance, and optimization of computer systems, devices, and associated hardware components."
          upRightSym={'{!}'}
          upRightTitle={'_graphics design'}
          upRightContent={
            '…this involves the visual communication of ideas, concepts, and information through the use of typography, images, colors, and various design elements. It is a powerful tool that enables effective visual storytelling and branding across different media platforms.'
          }
          lowLeftSym={'{#}'}
          lowLeftTitle={'_css & html'}
          lowLeftContent={
            '…a fundamental languages used in web development. They work together to structure and style the content of web pages, creating visually appealing and interactive websites.'
          }
          lowRightSym={'{%}'}
          lowRightTitle={'_javaScript'}
          lowRightContent={
            '…a programming language primarily used for web development. It enables developers to add dynamic and interactive elements to websites, enhance user experience, and create web applications with client-side functionality.'
          }
        />
        <Spacer>{'{*}'}</Spacer>
        <ContactMe />
      </MainContentContainer>
      <Footer />
    </>
  );
};
