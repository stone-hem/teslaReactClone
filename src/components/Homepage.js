import React from 'react'
import styled from 'styled-components'
import Section from './Section';

function Homepage() {
  return (
      <Container>
          <Section
          title="Model S"
          description="Order online for touchless delivery"
          backgroundImg="model-s.jpg"
          LeftBtnText="Custom Order"
          RightBtnText="Existing Inventory"
          />
          <Section
          title="Model Y"
          description="Order online for touchless delivery"
          backgroundImg="model-y.jpg"
          LeftBtnText="Custom Order"
          RightBtnText="Existing Inventory"
          />
          <Section
          title="Model X"
          description="Order online for touchless delivery"
          backgroundImg="model-x.jpg"
          LeftBtnText="Custom Order"
          RightBtnText="Existing Inventory"
          />
          <Section
          title="Model 3"
          description="Order online for touchless delivery"
          backgroundImg="model-3.jpg"
          LeftBtnText="Custom Order"
          RightBtnText="Existing Inventory"
          />
           <Section
          title="Lowest Cost Solar Panels in America"
          description="Money-back guarantee"
          backgroundImg="solar-panel.jpg"
          LeftBtnText="Order now"
          RightBtnText="Learn more"
          />
           <Section
          title="Solar for new roofs"
          description="Solar roofs costs less than a new roof"
          backgroundImg="solar-roof.jpg"
          LeftBtnText="Order now"
          RightBtnText="Learn more"
          />
           <Section
          title="Accessories"
          description=""
          backgroundImg="accessories.jpg"
          LeftBtnText="Order now"
          />
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



