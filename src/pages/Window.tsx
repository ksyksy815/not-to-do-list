import OpenFile from 'components/OpenFile'
import styled from 'styled-components'

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
      <OpenFile title="Not-To-Do List"/>
    </WindowStyle>
  )
}

export default Window;