import { useEffect, useState } from 'react';

export const TopPeg = () => {
  const topPegPhrase = ['topPeg creative & animation studio'];
  const [topPeg, setTopPeg] = useState('');
  const [currentTopPegPhraseIndex] = useState(0);
  const [currentTopPegIndex, setCurrentTopPegIndex] = useState(0);
  const [isPausingTopPeg, setIsPausingTopPegIndex] = useState(false);

  useEffect(() => {
    const typingInterval = 175;
    const pauseDuration = 800;

    const typedTopPeg = () => {
      if (currentTopPegIndex < topPegPhrase[0].length) {
        setTopPeg(
          (prevTopPegText) =>
            prevTopPegText + topPegPhrase[0][currentTopPegIndex]
        );
        setCurrentTopPegIndex(currentTopPegIndex + 1);
      } else {
        setIsPausingTopPegIndex(true);

        setTimeout(() => {
          setTopPeg('');
          setCurrentTopPegIndex(0);

          setIsPausingTopPegIndex(false);
        }, pauseDuration);
      }
    };

    const typingIntervalId = setInterval(typedTopPeg, typingInterval);

    return () => clearInterval(typingIntervalId);
  }, [currentTopPegIndex, currentTopPegPhraseIndex, isPausingTopPeg]);

  return <>{topPeg}</>;
};
