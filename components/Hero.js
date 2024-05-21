import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroSection>
      <h1>Your Name</h1>
      <img src="your-photo.jpg" alt="Your Name" />
      <p>Brief description of what you do</p>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default Hero;