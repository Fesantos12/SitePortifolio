import { TypeAnimation } from 'react-type-animation';

export const TypeAnimationText = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Fellipe Santos.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'developer.',
        1000,
        'web developer.',
        1000,
        'Front-End developer.',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

// { fontSize: '6rem', display: 'inline-block' }
