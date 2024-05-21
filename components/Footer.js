import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
      </SocialLinks>
      <p>&copy; 2024 Your Name. All rights reserved.</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
`;

const SocialLinks = styled.div`
  margin-bottom: 1rem;
  a {
    color: #fff;
    margin: 0 1rem;
    font-size: 1.5rem;
    text-decoration: none;
    &:hover {
      color: #ddd;
    }
  }
`;

export default Footer;
