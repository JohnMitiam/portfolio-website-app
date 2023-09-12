import { useEffect, useState } from 'react';

import { Footer } from '../Layout/Footer/Footer';
import { Header } from '../Layout/Header/Header';

import { ContactMain } from '@components/ContactUS/ContactMain';
import { MainContentContainer } from '@components/Containers/MainContentContainer';
import { TitleAnimationPages } from '@components/Containers/TitleAnimationPages';
import { Space } from '@components/Spacer/Space';

export const Contact = () => {
  const mainTextPhrase = ['contact_me'];
  const [mainText, setMainText] = useState('');
  const [currentMainTextPhraseIndex] = useState(0);
  const [currentMainTextIndex, setCurrentMainTextIndex] = useState(0);
  const [isPausingMainText, setIsPausingMainTextIndex] = useState(false);

  useEffect(() => {
    const typingInterval = 175;
    const pauseDuration = 800;

    const typedMainText = () => {
      if (currentMainTextIndex < mainTextPhrase[0].length) {
        setMainText(
          (prevMainTextText) =>
            prevMainTextText + mainTextPhrase[0][currentMainTextIndex]
        );
        setCurrentMainTextIndex(currentMainTextIndex + 1);
      } else {
        setIsPausingMainTextIndex(true);

        setTimeout(() => {
          setMainText('');
          setCurrentMainTextIndex(0);

          setIsPausingMainTextIndex(false);
        }, pauseDuration);
      }
    };

    const typingIntervalId = setInterval(typedMainText, typingInterval);

    return () => clearInterval(typingIntervalId);
  }, [currentMainTextIndex, currentMainTextPhraseIndex, isPausingMainText]);

  return (
    <>
      <Header />
      <MainContentContainer>
        <TitleAnimationPages>{mainText}</TitleAnimationPages>
        <Space />
        <div className="flex justify-center">
          <span className="text-2xl text-[#e6db74]">
            …connect with Confidence, Reach Out Today: Your Direct Line to
            Collaboration, Solutions, and Possibilities
          </span>
        </div>
        <Space />
        <div className="flex justify-center">
          <span className="text-2xl text-[#e6db74]">{'//Contact Me!'}</span>
        </div>
        <Space />
        <ContactMain />
      </MainContentContainer>
      <Footer />
    </>
  );
};
