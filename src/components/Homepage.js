import React from 'react'
import styled from 'styled-components'
import Section from './Section';

function Homepage() {
  return (
      <Container>
          <Section/>
      </Container>
  )
}

export default Homepage

const Container = styled.div`
height:100vh;
// font-size: 1.5em;
// text-align: center;
// color: palevioletred;
`;



