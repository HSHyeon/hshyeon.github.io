import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Logo</Logo>
      <nav>
        <NavMenu>
          <NavMenuItem>
            <NavLink href="#Intro">Intro</NavLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavLink href="#About">About</NavLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavLink href="#Portfolio">Portfolio</NavLink>
          </NavMenuItem>
        </NavMenu>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
const HeaderContainer = styled.header`
  padding: 20px;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: #ffffff1d;
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
  &:hover {
    text-decoration: underline;
  }
`;
