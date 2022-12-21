import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import styled from 'styled-components'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Panel from './panel'

import MemoryGame from './Pages/MemoryGame/MemoryGame'
import Settings from './Pages/Settings/Settings'

import SideBarNav from './Components/SideBarNav/SideBarNav'

import { Cat } from './Assets/svg/Cat.js'

const MainWrap = styled.main `
  position: relative;
  overflow: hidden;
  display: flex;
  height: 100vh;
  background-color: #ffffff;
  .addycats-svg-wrap {
    position: absolute;
    top: -30%;
    left: 100%;
    transform: rotate(-15deg) translateX(-660px);
    height: 100vh;
  }
`

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainWrap>
        <Router>
          <SideBarNav />
          <Routes>
            <Route path="/" element={<MemoryGame />} />
          </Routes>
        </Router>
        <div className="addycats-svg-wrap">
          <Cat color="#E5E5E5" svgWidth="920px" />
        </div>
      </MainWrap>
    </ThemeProvider>
  );
}