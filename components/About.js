import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutSection>
      <h2>About Me</h2>
      <p>Summary of your background, interests, and career goals.</p>
      <a href="resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  padding: 2rem;
  text-align: center;
  a {
    color: blue;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default About;
