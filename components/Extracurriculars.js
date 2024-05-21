import React from 'react';
import styled from 'styled-components';

const Extracurriculars = () => {
  return (
    <Section>
      <h2>Extracurricular Activities & Interests</h2>
      <Activity>
        <h3>Hackathons</h3>
        <p>Participated in various hackathons, achieving notable results such as [insert achievements].</p>
      </Activity>
      <Activity>
        <h3>Coding Clubs</h3>
        <p>Active member of [insert coding club], where I collaborated on several projects and mentored new members.</p>
      </Activity>
      <Activity>
        <h3>Volunteer Work</h3>
        <p>Volunteered at [insert organization], contributing to [insert activities or projects].</p>
      </Activity>
      <Activity>
        <h3>Interests</h3>
        <p>Passionate about [insert interests], such as [insert hobbies or activities].</p>
      </Activity>
    </Section>
  );
};

const Section = styled.section`
  padding: 2rem;
  text-align: left;
`;

const Activity = styled.div`
  margin-bottom: 1.5rem;
  h3 {
    margin-bottom: 0.5rem;
    color: #333;
  }
  p {
    margin: 0;
    color: #666;
  }
`;

export default Extracurriculars;
