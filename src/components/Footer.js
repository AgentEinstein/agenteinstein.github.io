import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink href="https://www.linkedin.com/in/rafid-b-a21092203/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="linkedin">
          <FaLinkedin />
        </SocialLink>
        <SocialLink href="https://github.com/AgentEinstein" target="_blank" rel="noopener noreferrer" title="GitHub" className="github">
          <FaGithub />
        </SocialLink>
        <SocialLink href="mailto:rafidb8@gmail.com" target="_blank" rel="noopener noreferrer" title="Email" className="email">
          <FaEnvelope />
        </SocialLink>
      </SocialLinks>
      <p>&copy; 2024 Byron Bhuiyan. All rights reserved.</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: fixed;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 200px; 
  background: #bbbab8; 
  border-top-left-radius: 100%; 
  border-top-right-radius: 100%; 
  color: #fff;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); 
  overflow: hidden; 
  z-index: 10;

  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.15), rgba(0, 0, 0, 0.15));
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  gap: 15rem; 
  height: 50%; 
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 2rem; 
  text-decoration: none;
  transition: color 0.3s ease, background-color 0.3s ease; 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;

  &.linkedin:hover {
    color: #0e76a8;
    background-color: #fff; 
  }

  &.github:hover {
    color: #000; 
    background-color: #fff; 
  }

  &.email:hover {
    color: #ddd; 
    background-color: #fff; 
  }
`;

export default Footer;