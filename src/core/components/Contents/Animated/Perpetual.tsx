import { useEffect, useState } from 'react';

export const Perpetual = () => {
  const mainTextPhrase = ['perpetual help system dalta'];
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

  return <>{mainText}</>;
};
