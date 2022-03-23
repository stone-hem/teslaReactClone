import React from 'react'
import styled from 'styled-components'

function Section() {
  return (
    <Wrap>
        <TopText>
            <h1>Model s</h1>
            <p>Order online for touchless delevery</p>
        </TopText>
        <Buttons>
        <BottonButtons>
            <Left>
                Custom Order
            </Left>
            <Right>
                Existing Inventory
            </Right>
        </BottonButtons>
        <Down src="/images/down-arrow.svg" />
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap=styled.div`
width:100vw; //100
height:100vh; //100
background-size:cover; //cover the exact whole page
background-position:center; //position it centrally
background-repeat:no-repeat; //no bg repeat
background-image:url('/images/model-s.jpg'); //access the image in public folder

//align the butons to the bottom
display:flex;
flex-direction:column; //from top to bottom
justify-content:space-between; //vertical allignment
align-items:center; //horizontal allignment
`;

const TopText=styled.div`
padding-top:15vh;
text-align:center;
`;

const BottonButtons=styled.div`
display:flex; //display the buttons in a flex manner next to each other
margin-bottom:30px; //move up 30px
cursor:pointer;

`;

const Left=styled.div`
background-color: rgba(23,26,32,0.8); //bg color
height:40px; //horizontally
width:256px; //vertically
color:white; //text color
display:flex; //flex
justify-content:center; //align items horizontally
align-items:center;  //align items vertically
border-radius:300px; //round the border of the boxes
opacity:0.8; //transparency
font-size:14px;  //size of the font
margin:10px;
`;

const Right=styled(Left)`


`

const Down=styled.img`
margin-top:20px;
height:40px;
`

const Buttons=styled.div`
animate: animateDown infinite 1.5s;
`