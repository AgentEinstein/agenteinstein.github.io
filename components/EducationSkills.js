import React from 'react';
import styled from 'styled-components';

const EducationSkills = () => {
  return (
    <Section>
      <h2>Education & Skills</h2>
      <div>
        <h3>Education</h3>
        <p>Degree, University, Year</p>
        <p>Relevant Coursework</p>
      </div>
      <div>
        <h3>Skills</h3>
        <ul>
          <li>Programming Languages</li>
          <li>Software Proficiency</li>
          <li>Other Relevant Skills</li>
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
