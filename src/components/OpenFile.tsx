import React from 'react'
import styled from 'styled-components'
import WindowIcon from './WindowIcon'
import List from './List'

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
  }
`

export interface HeaderProps {
  title: string
  color?: string
}

function OpenFile(props: HeaderProps) {
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
          props.title === 'Not-To-Do List' && <List />
        }
      </main>
    </OpenFileStyle>
  )
}

export default OpenFile