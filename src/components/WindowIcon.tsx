import React from 'react'
import styled from 'styled-components'

interface IconProps {
  contents: string
}

const WindowIconStyle = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: var(--light-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #555;
`

export default function WindowIcon( props: IconProps ) {
  return (
    <WindowIconStyle>
      {props.contents}
    </WindowIconStyle>
  )
}
