import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components'
import AppStatusIndicator from '../AppStatusIndicator/AppStatusIndicator'
import { FaGamepad, FaCogs, FaTrophy, FaCoins} from "react-icons/fa";

const NavWrapper = styled.section`
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    background-color: #E6E6E6;
    max-width: 260px;
    width: 100%;
    border-left: 10px solid #C996CC;
    z-index: 99;
`
const Nav = styled.nav`
    flex-grow: 1;
    margin-top: 120px;
`
const NavHeader = styled.div`
    padding: 1em;
`
const NavFooter = styled.div`
    position: relative;
    padding: 1em;
    font-weight: 600;
`
const StyledListItem = styled.li `
    position: relative;
    height: 100%;
`
const StyledLink = styled(NavLink)`
  color: #2A2A2A;
  text-decoration: none;
  padding: 1em 1.5em 1em 1.5em;
  display: flex;
  align-self: center;
  font-weight: 600;
  font-size: 1em;
  width: 100%;
  letter-spacing: 0.08em;
  span {
        width: 100%;
        z-index: 99;
      }
    .nav-icon {
        color: #1C0C5B;
        z-index: 99;
        max-width: 24px;
        min-height: 24px;
        height: 100%;
        font-size: 2em;
        position: absolute;
        right: 5px;
        top: 0;
        opacity: 0;
    }
  &.active {
      color: #f1f1f1;
      padding: 1em 1em 1em 1.5em;
      .nav-icon {
        opacity: 1;
    }
      &:after {
            content: '';
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            background-color: #C996CC;
            border-radius: 0px 20px 0px 0px;
            width: 105%;
            z-index: 9;
      }
      &:before {
            content: '';
            position: absolute;
            bottom: -12px;
            left: 100%;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 12px 13px 0 0;
            border-color: #916BBF transparent transparent transparent;
            z-index: 999;
      }
  }
`;

const SideBarNav = () => {
    return (
        <NavWrapper>
            {/* <NavHeader>Addy Catz</NavHeader> */}
            <Nav role="navigation">
                <ul className="sidebar__nav-list" style={{ listStyle: 'none' }}>
                    <StyledListItem>
                        <StyledLink to="/" activeClassName="active" >
                            <span>Memory Game</span>
                            <FaGamepad className="nav-icon" />
                        </StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink to="/trophys" activeClassName="active">
                            <span>Trophys</span>
                            <FaTrophy className="nav-icon" />
                        </StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink to="/cat-points" activeClassName="active">
                            <span>Cat Points</span>
                            <FaCoins className="nav-icon" />
                        </StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink to="/settings" activeClassName="active">
                            <span>Settings</span>
                            <FaCogs className="nav-icon" />
                        </StyledLink>
                    </StyledListItem>
                </ul>
            </Nav>
            {/* <NavFooter>Addy Catz <AppStatusIndicator /></NavFooter> */}
        </NavWrapper >
    );
}


export default SideBarNav