import React, { useState } from 'react';
import styled from 'styled-components';

const ExperienceProjects = () => {
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const toggleExperience = () => {
    setIsExperienceOpen(!isExperienceOpen);
  };

  const toggleProjects = () => {
    setIsProjectsOpen(!isProjectsOpen);
  };

  return (
    <Section>
      <h2>Experience & Projects</h2>
      <Dropdown>
        <DropdownHeader onClick={toggleExperience} background="#532166">
          <h3>Experience</h3>
          <ToggleIcon>{isExperienceOpen ? '-' : '+'}</ToggleIcon>
        </DropdownHeader>
        <DropdownContent isOpen={isExperienceOpen} background="#532166">
          <a href="https://isa.ucrhighlanders.org/" target="_blank" rel="noopener noreferrer"><h4>Indian Student Association, ACM@UCR, 2024</h4></a>
          <p>Collaborated in a committee to design, develop, and launch the official website for Indian Student Association using Next.JS, Firebase, and TailwindCSS</p>
          <a href="https://github.com/acm-ucr/hackathon-website" target="_blank" rel="noopener noreferrer"><h4>RoseHack, ACM@UCR, 2023</h4></a>
          <p>Collaborated in a committee to design, develop, and launch the official website for RoseHack using Next.JS, Firebase, and TailwindCSS</p>
          <a href="https://ewb.ucrhighlanders.org/" target="_blank" rel="noopener noreferrer"><h4>Engineers Without Borders, ACM@UCR, 2023</h4></a>
          <p>Collaborated in a committee to design, develop, and launch the official website for Engineers Without Borders using Next.JS, Firebase, and TailwindCSS</p>
        </DropdownContent>
      </Dropdown>
      <Dropdown>
        <DropdownHeader onClick={toggleProjects} background="#2b6c4a">
          <h3>Projects</h3>
          <ToggleIcon>{isProjectsOpen ? '-' : '+'}</ToggleIcon>
        </DropdownHeader>
        <DropdownContent isOpen={isProjectsOpen} background="#2b6c4a">
          <a href="https://github.com/AgentEinstein/cs120bfinal" target="_blank" rel="noopener noreferrer"><h4>Automated Plant Care System, 2023</h4></a>
          <p>Designed and implemented an automated plant care system using Arduino and C to monitor and adjust environmental variables such as soil moisture, light exposure, and temperature, enhancing plant growth efficiency.</p>
          <a href="https://github.com/AgentEinstein/final-project-cespa014-rnguy135-schop021-rbhui003" target="_blank" rel="noopener noreferrer"><h4>Don't Slip, Save the Princess, 2022</h4></a>
          <p>Built a text-based RPG that utilizes Git and inheritance.</p>
          <a href="https://github.com/MinteaAliens/Einstein-Mouse" target="_blank" rel="noopener noreferrer"><h4>Einstein Mouse, 2022</h4></a>
          <p>Designed a game using Game Maker Language (GML) and Game Maker Studio (GMS).</p>
          <a href="https://github.com/advilm/micromouse" target="_blank" rel="noopener noreferrer"><h4>IEEE Micromouse, 2022</h4></a>
          <p>Engineered a compact, autonomous micromouse robot to navigate and solve maze challenges.</p>
          <a href="https://github.com/SafeDuck/Rose_Hack" target="_blank" rel="noopener noreferrer"><h4>RoseBot, 2022</h4></a>
          <p>Developed a website using ReactJS that generates hackathon ideas at the click of a button.</p>
          <a href="https://github.com/advilm/cutiehack" target="_blank" rel="noopener noreferrer"><h4>PIG Game Discord Bot, 2022</h4></a>
          <p>Successfully developed and launched a PIG counting game bot for Discord, facilitating interactive gameplay for server members.</p>
        </DropdownContent>
      </Dropdown>
    </Section>
  );
};

const Section = styled.section`
  padding: 2rem;
  text-align: left;
  padding-bottom: 300px; 
`;

const Dropdown = styled.div`
  margin-bottom: 1rem;
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: ${({ background }) => background};
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
`;

const ToggleIcon = styled.span`
  font-size: 1.5rem;
`;

const DropdownContent = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  padding: ${({ isOpen }) => (isOpen ? '1rem' : '0 1rem')};
  background: ${({ background }) => background};
  color: #fff;
  border-radius: 5px;
  border-top: ${({ isOpen }) => (isOpen ? '1px solid #e0e0e0' : 'none')};

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  h4 {
    margin: 0;
  }
`;

export default ExperienceProjects;
