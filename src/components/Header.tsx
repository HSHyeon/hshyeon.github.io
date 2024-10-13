import styled from "styled-components";
import { RxGithubLogo } from "react-icons/rx";
import { useEffect, useState } from "react";
import { FaRegFilePdf } from "react-icons/fa6";

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

            <NavLink
              href="./sohyeon_portfolio.pdf"
              className="download"
              active={activeLink === "#Works"}
              download
            >
              <FaRegFilePdf size={23} />
            </NavLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavLink href="https://github.com/HSHyeon">
              <RxGithubLogo size={24} />
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
  height: 21px;
`;

const NavMenu = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;
  padding-inline: 10px;
  margin: 0;
`;

const NavMenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
`;

interface NavLinkProps {
  active?: boolean;
}

const NavLink = styled.a<NavLinkProps>`
  color: ${({ active }) => (active ? "white" : "#ffffff74")};
  &:hover {
    color: white;
  }
  &.download {
    color: ${({ active }) => (active ? "#fffcb2" : "#ffffff74")};
    ${({ active }) =>
      active &&
      `
      animation: blink-animation  1.5s infinite; /* Adjust duration for speed */
    `}
    @keyframes blink-animation {
      0%,
      100% {
        opacity: 1; /* Fully visible */
      }
      50% {
        opacity: 0.7; /* Half visible */
      }
    }
  }
`;
