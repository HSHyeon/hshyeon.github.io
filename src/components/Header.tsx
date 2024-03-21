import styled from "styled-components";
import { RxGithubLogo } from "react-icons/rx";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="./hshlogo.png" />
      <nav>
        <NavMenu>
          <NavMenuItem>
            <NavLink href="#Intro">Intro</NavLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavLink href="#About">About</NavLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavLink href="#Works">Works</NavLink>
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

const NavLink = styled.a`
  color: white;
  &:hover {
    color: gray;
  }
`;
const IconContainer = styled.span`
  font-size: 24px; /* 아이콘 크기 조절 */
  vertical-align: middle; /* 아이콘을 수직 가운데 정렬 */
`;
