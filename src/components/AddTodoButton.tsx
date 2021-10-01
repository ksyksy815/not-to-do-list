import styled from 'styled-components'

const AddTodoBtn = styled.button`
  background: var(--dark-pink);
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
`

interface AddTodoButtonProps {
  mode: string
  toggleNewTodo: () => void
}

export default function AddTodoButton({mode, toggleNewTodo}: AddTodoButtonProps) {
  const handleClick = (): void => {
    if (mode === 'general') {
      toggleNewTodo()
    }
  }

  return (
    <AddTodoBtn onClick={handleClick}>
      Add
    </AddTodoBtn>
  )
}
