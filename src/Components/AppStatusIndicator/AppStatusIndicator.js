import styled from 'styled-components'

const IndicatorStyles = styled.span`
    font-size: .6rem;
    background-color: red;
    border-radius: 30px;
    padding: .4em .8em;
    color: #ffffff;
    position: absolute;
    top: -6px;
    margin: 6px;
`

const AppStatusIndicator = () => {
    return <IndicatorStyles>Alpha v0.0.1</IndicatorStyles>
}

export default AppStatusIndicator