import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Logo</Logo>
      <nav>
        <NavMenu>
          <NavMenuItem>
            <NavLink href="#">Home</NavLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavLink href="#">About</NavLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavLink href="#">Portfolio</NavLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavLink href="#">Contact</NavLink>
          </NavMenuItem>
        </NavMenu>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
const HeaderContainer = styled.header`
  color: #fff;
  padding: 20px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavMenuItem = styled.li`
  display: inline-block;
  margin-right: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  &:hover {
    text-decoration: underline;
  }
`;
