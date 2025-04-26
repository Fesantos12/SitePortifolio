import { TypeAnimation } from 'react-type-animation';

export const TypeAnimationText2 = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'a music lover.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'a michael Jackson fan.',
        1000,
        'a Doggone Lover.',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};
