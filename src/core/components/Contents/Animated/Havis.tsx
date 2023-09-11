import { useEffect, useState } from 'react';

export const Havis = () => {
  const havisPhrase = ['havis jade construction inc'];
  const [havis, setHavis] = useState('');
  const [currentHavisPhraseIndex] = useState(0);
  const [currentHavisIndex, setCurrentHavisIndex] = useState(0);
  const [isPausingHavis, setIsPausingHavisIndex] = useState(false);

  useEffect(() => {
    const typingInterval = 175;
    const pauseDuration = 800;

    const typedHavis = () => {
      if (currentHavisIndex < havisPhrase[0].length) {
        setHavis(
          (prevHavisText) => prevHavisText + havisPhrase[0][currentHavisIndex]
        );
        setCurrentHavisIndex(currentHavisIndex + 1);
      } else {
        setIsPausingHavisIndex(true);

        setTimeout(() => {
          setHavis('');
          setCurrentHavisIndex(0);

          setIsPausingHavisIndex(false);
        }, pauseDuration);
      }
    };

    const typingIntervalId = setInterval(typedHavis, typingInterval);

    return () => clearInterval(typingIntervalId);
  }, [currentHavisIndex, currentHavisPhraseIndex, isPausingHavis]);

  return <>{havis}</>;
};
