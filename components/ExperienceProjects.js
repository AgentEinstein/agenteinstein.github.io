import React from 'react';
import styled from 'styled-components';

const ExperienceProjects = () => {
  return (
    <Section>
      <h2>Experience & Projects</h2>
      <div>
        <h3>Work Experience</h3>
        <p>Job Title, Company, Year</p>
        <p>Responsibilities and Accomplishments</p>
      </div>
      <div>
        <h3>Projects</h3>
        <p>Project Name, Year</p>
        <p>Description and Technologies Used</p>
      </div>
      <div>
        <h3>Certifications & Achievements</h3>
        <p>Certification or Award, Year</p>
      </div>
    </Section>
  );
};

const Section = styled.section`
  padding: 2rem;
  text-align: left;
`;

export default ExperienceProjects;
