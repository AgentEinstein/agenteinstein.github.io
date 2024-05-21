import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/education-skills">Education/Skills</Link>
      <Link to="/experience-projects">Experience/Projects</Link>
      <Link to="/extracurriculars">Extracurriculars</Link>
      <Link to="/contact">Contact</Link>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #333;
  padding: 1rem;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default NavBar;