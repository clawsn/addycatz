import styled from 'styled-components'
import catMono from './Assets/images/cat-monogram.png';

const PanelWrap = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
    background-color: #F5F5F5;
    overflow: hidden;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: url(${catMono});
        background-repeat: no-repeat;
        background-size: 760px;
        background-position: 100% 30%;
        transform: rotate(-16deg);
        opacity: .08;
    }
`

const PanelWrapperInner = styled.div `
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Panel = () => {
    return (
    <PanelWrap>
        <PanelWrapperInner>
            <h2>Loading Addy Catz...</h2>
        </PanelWrapperInner>
    </PanelWrap>
    )
}

export default Panel;