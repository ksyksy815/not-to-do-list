import styled from 'styled-components'

const NewToDoForm = styled.form`
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;

  input {
    flex: 1 1 auto;
    border-bottom: 1px solid #555;
  }

  button {
    background: var(--dark-pink);
    color: #fff;
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
  }
`
export default function NewTodo() {
  return (
    <NewToDoForm>
      <input type="text" placeholder="꼭 하지 않을 일을 적으세요!" />
      <button>추가하기</button>
    </NewToDoForm>
  )
}
