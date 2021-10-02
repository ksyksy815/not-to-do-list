import styled from 'styled-components'

const StyledList = styled.ul`
  width: 100%;
  max-width: 400px;
  height: 90%;
  max-height: 800px;
  background: #fff;
  border-radius: 10px;
  border-top: 20px solid var(--dark-pink);
  border-bottom: 20px solid var(--dark-pink);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`


export default function List() {
  return (
    <StyledList>
      list
    </StyledList>
  )
}
