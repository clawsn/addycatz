import styled from 'styled-components'
import { AcCardBack } from '../../Assets/svg/AcCardBack'


const MemoryGameWrap = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 1.5em;
    z-index: 99;
`
const GridWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 760px;
`
const GridWrapCol = styled.div`
    width: 100%;
    max-width: 33.33333%;
    padding: 1em 1.5em;
    text-align: center;
`

const dummyData = [
    {
        'id': 1,
        'color': 'green',
    },
    {
        'id': 2,
        'color': 'green',
    },
    {
        'id': 3,
        'color': 'purple',
    },
    {
        'id': 4,
        'color': 'purple',
    },
    {
        'id': 5,
        'color': 'orange',
    },
    {
        'id': 6,
        'color': 'orange',
    },
]


const MemoryGame = () => {
    return (
    <MemoryGameWrap>
        <GridWrap>
            {dummyData.map((cards) => {
                return <GridWrapCol><AcCardBack /></GridWrapCol>
            })}
        </GridWrap>
    </MemoryGameWrap>
    );
}

export default MemoryGame;