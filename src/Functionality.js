import styled from 'styled-components'
import { useState } from 'react'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
`

const RandomDiv = styled.div`
  margin: 5px;
  position: absolute;
  top: ${(props) => props.positionVertical};
  left: ${(props) => props.positionHorizontal};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
`

const Funcionality = () => {

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const randomColor = () => {
    return ("rgb(" + randomNumber(0, 255) + "," + randomNumber(0, 255) + "," + randomNumber(0, 255) + ")")
  }

  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState('');

  const handleClick = () => {
    setShow(true)
    setUpdate(up => up + 1)
  }

  return(
    <Container>
      <button onClick={handleClick}>Generuj</button>
      {show &&
        <RandomDiv
        positionVertical={randomNumber(0, 100) + "%"}
        positionHorizontal={randomNumber(0, 100) + "%"}
        color={randomColor()}
        width={randomNumber(1,50) + "%"}
        height={randomNumber(1,50) + "%"}>
        </RandomDiv>
      }
    </Container>
  )
}

export default Funcionality
