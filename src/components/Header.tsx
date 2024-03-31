import styled from "styled-components";
import { RxGithubLogo } from "react-icons/rx";
import { useEffect, useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState<string>("#Intro");

  useEffect(() => {
    const handlePopstate = () => {
      const anchor = window.location.hash; // "#Intro" 반환
      setActiveLink(anchor);
    };

    window.addEventListener("popstate", handlePopstate);
    return () => window.removeEventListener("popstate", handlePopstate);
  }, []);

  return (
    <HeaderContainer>
      <Logo src="./hshlogo.png" />
      <nav>
        <NavMenu>
          <NavMenuItem>
            <NavLink href="#Intro" active={activeLink === "#Intro"}>
              Intro
            </NavLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavLink href="#About" active={activeLink === "#About"}>
              About
            </NavLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavLink href="#Works" active={activeLink === "#Works"}>
              Works
            </NavLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavLink href="https://github.com/HSHyeon">
              <IconContainer>
                <RxGithubLogo />
              </IconContainer>
            </NavLink>
          </NavMenuItem>
        </NavMenu>
      </nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  padding: 20px;
  box-sizing: border-box;
  border-bottom: 0.1px solid #ffffff10;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  width: 100vw;
`;

const Logo = styled.img`
  width: 50px;
  height: 21px;
`;

const NavMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavMenuItem = styled.li`
  display: inline-block;
  margin-right: 20px;
  vertical-align: middle;
`;

interface NavLinkProps {
  active?: boolean;
}

const NavLink = styled.a<NavLinkProps>`
  color: ${({ active }) => (active ? "white" : "#ffffff74")};
  &:hover {
    color: white;
  }
`;

const IconContainer = styled.span`
  font-size: 24px;
  vertical-align: middle;
`;
