import React from 'react';
import styled from 'styled-components';

const EducationSkills = () => {
  return (
    <Section>
      <h2>Education & Skills</h2>
      <div>
        <p>B.S Computer Science, University of California, Riverside, 2024</p>
        <h3>Relevant Coursework</h3>
        <p>Data Structures and Algorithms, Software Construction, Web Development, Machine Learning</p>
      </div>
      <div>
        <h3>Technical Skills</h3>
          <p>C++, Java, Python</p>
          <p>HTML, CSS, Javascript</p>
          <p>ReactJS, NextJS, ExpressJS, TailwindCSS</p>
          <h3>Soft Skills</h3>
          <p>Problem Solving, Critical Thinking, Communication </p>
      </div>
    </Section>
  );
};

const Section = styled.section`
  padding: 2rem;
  text-align: center;
`;

export default EducationSkills;
