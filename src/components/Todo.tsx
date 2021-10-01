import styled from 'styled-components'

const StyledTodo = styled.li`
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  background: #fff;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
`

interface todoProps {
  key: number
  id: number
  content: string
  completed: boolean
}

export default function Todo(props: todoProps) {
  return (
    <StyledTodo>
      <div>{props.content}</div>
      <div>{props.completed}</div>
    </StyledTodo>
  )
}
