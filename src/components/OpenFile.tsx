import { useState } from 'react'
import styled from 'styled-components'
import WindowIcon from './WindowIcon'
import List from './List'
import AddTodoButton from './AddTodoButton'
import NewTodo from './NewTodo'

const todos = [
  {
    id: 1,
    content: "todo 1",
    completed: false
  },
  {
    id: 2,
    content: "todo 2",
    completed: true
  },
  {
    id: 3,
    content: "todo 1",
    completed: false
  }
]

const OpenFileStyle = styled.div`
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 10px 10px 20px 5px rgba(0, 0, 0, 0.2);
  border: 2px solid #555;
  
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--dark-pink);
    padding: 10px;
    border-bottom: 3px solid #555;
  }
  #list-name {
    font-weight: bold;
  }
  #folder-buttons {
    display: flex;
    column-gap: 0.3rem;
  }

  main {
    width: 100%;
    height: 100%;
    background: var(--light-pink);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    row-gap: 1rem;
  }
`

export interface HeaderProps {
  title: string
  color?: string
}

function OpenFile(props: HeaderProps) {
  const [mode, setMode] = useState('general')
  const [content, setContent] = useState('')

  const changeMode = (): void => {
    if (mode === 'general') {
      setMode('add new not-to-do')
    }
  }

  const handleInputChange = (e): void => {
    setContent(e.target.value)
  }

  const handleNewTodo = (e): void => {
    e.preventDefault()

  }

  return (
    <OpenFileStyle>
      <header>
        <div id ="list-name">{props.title}</div>
        <div id="folder-buttons">
          <WindowIcon contents="-"/>
          <WindowIcon contents="O"/>
          <WindowIcon contents="X"/>
        </div>
      </header>
      <main>
        {
          props.title === 'Not-To-Do List' && <List todos={todos} />
        }
        {
          mode === 'general' ?
          <AddTodoButton mode={mode} toggleNewTodo={changeMode}/> :
          <NewTodo handleChange={handleInputChange} handleSubmit={handleNewTodo} />
        }
      </main>
    </OpenFileStyle>
  )
}

export default OpenFile