import React from 'react';
import styled from 'styled-components';
import ProfPic from '../components/assets/profpic.png'
const Hero = () => {
  return (
    <HeroSection>
      <TextContainer>
        <h1>Joe Blanks</h1>
        <img src={ProfPic} alt="Joe Blanks" />
        <p>Dedicated Computer Science student seeking to leverage my foundational knowledge in software development as a
          Software Engineer Intern. Passionate about cultivating innovation and optimizing work processes. Eager to collaborate with a team and immerse myself in the professional and educational opportunities presented.
        </p>
      </TextContainer>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const TextContainer = styled.div`
  width: 50%; 
  max-width: 600px; 
  min-width: 300px;
  margin: 0 auto; /
  
  h1 {
    font-size: 2.5rem; 
    margin-bottom: 1rem;
  }
  
  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin-bottom: 1rem;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }

  p {
    font-size: 1.1rem; 
    line-height: 1.5; 
    margin-bottom: 1rem;
  }
`;

export default Hero;
