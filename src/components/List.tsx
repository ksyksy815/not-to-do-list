import styled from 'styled-components'
import Todo from './Todo'

const StyledUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
`


interface ListProps {
  todo: {
    id: number
    content: string
    completed: boolean
  }
}

function List( {todo}: ListProps ) {

  return (
    <StyledUl>
      {
        todos.map(todo => 
        <Todo key={todo.id} id={todo.id} content={todo.content} completed={todo.completed}/>)
      }
    </StyledUl>
  )
}
export default List