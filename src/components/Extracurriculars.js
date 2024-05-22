import React from 'react';
import styled from 'styled-components';

const Extracurriculars = () => {
  return (
    <Section>
      <h2>Extracurricular Activities & Interests</h2>
      <Activity>
        <h3>Hackathons</h3>
        <p>Participated in various hackathons, such as CitrusHack 2022 where my team and I received Best Beginner Award.</p>
      </Activity>
      <Activity>
        <h3>Coding Clubs</h3>
        <p>Active member of ACM@UCR, where I collaborated on several projects.</p>
      </Activity>
      <Activity>
        <h3>Interests</h3>
        <p>Passionate about Web Development and Machine Learning</p>
      </Activity>
    </Section>
  );
};

const Section = styled.section`
  padding: 2rem;
  text-align: center;
`;

const Activity = styled.div`
  margin-bottom: 1.5rem;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin: 0;
  }
`;

export default Extracurriculars;
