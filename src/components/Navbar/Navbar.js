import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background: black;
  height: 50px;
`;

const Brand = styled.div`
  color: white;
  font-weight: 700;
`;

const RightMenu = styled.div`
  display: flex;

  @media (min-width: 480px) {
    p {
      margin: 0 1rem;
    }
    
    a {
      color: white;
      text-decoration: none;
    }
  }
`;

const navbar = (props) => (
  <Nav>
    <Brand>ToDo App</Brand>
    <RightMenu>
      <p>
        <NavLink to="/" exact>Home</NavLink>
      </p>
      <p>
        <NavLink to="/about" exact>About</NavLink>
      </p>
      <p>
        <NavLink to="/logout" exact>Logout</NavLink>
      </p>
    </RightMenu>
  </Nav>
);

export default navbar;
