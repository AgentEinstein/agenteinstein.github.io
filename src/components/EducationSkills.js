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
        <h3>Skills</h3>
        <ul>
          <li>C++, Java, Python</li>
          <li>HTML, CSS, Javascript</li>
          <li>ReactJS, NextJS, ExpressJS, TailwindCSS</li>
          <li>Problem Solving, Critical Thinking, Communication </li>
        </ul>
      </div>
    </Section>
  );
};

const Section = styled.section`
  padding: 2rem;
  text-align: left;
`;

export default EducationSkills;
