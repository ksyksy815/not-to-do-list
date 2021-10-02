import styled from 'styled-components'
import List from '../components/List'

const WindowStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(199,210,225);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Window = () => {
  return (
    <WindowStyle>
      <List /> 
    </WindowStyle>
  )
}

export default Window;