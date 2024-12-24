import React from 'react';
import AnimatedCard from '../Animations/AnimatedCard';

const FeaturedChat: 
React.FC<{ 
    text: string, 
    bgColor: string,
    defaultText: string,
}> = ({ text, bgColor, defaultText }) => {
  return (
    <>
        <AnimatedCard
          text={text}
          defaultText={defaultText}
          backgroundColor={bgColor}
        />
    </>

  )
}

export default FeaturedChat