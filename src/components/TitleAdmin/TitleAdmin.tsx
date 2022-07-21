import React from 'react'
import styled from 'styled-components'
type Props = {
   name: string
}

const TitleAdmin = (props: Props) => {
  return (
    <Title>{props.name}</Title>
  )
}

const Title = styled.p`
    padding-top: 15px ;
    color: #5F5E61;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;

`
export default TitleAdmin