import React from 'react'
import styled from 'styled-components'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';


function Section({ title, description, LeftBtnText, RightBtnText, backgroundImg }) {
    return (
        <Wrap bgImage={backgroundImg} >
            <Bounce clear>
            <TopText>
                <h1>{title}</h1>
                <p>{description}</p>
            </TopText>
            </Bounce>
            <Fade>
            <Buttons>
                <BottonButtons>
                    <Left>
                        {LeftBtnText}
                    </Left>
                    {RightBtnText &&
                        <Right>
                            {RightBtnText}
                        </Right>
                    }
                </BottonButtons>
                <Down src="/images/down-arrow.svg" />
            </Buttons>
            </Fade>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
width:100vw; //100
height:100vh; //100
background-size:cover; //cover the exact whole page
background-position:center; //position it centrally
background-repeat:no-repeat; //no bg repeat
background-image:url('/images/model-s.jpg'); //access the image in public folder

//align the buttons to the bottom
display:flex;
flex-direction:column; //from top to bottom
justify-content:space-between; //vertical alignment
align-items:center; //horizontal alignment
background-image:${props => `url("/images/${props.bgImage}")`};

`;

const TopText = styled.div`
padding-top:15vh;
text-align:center;
`;

const BottonButtons = styled.div`
display:flex; //display the buttons in a flex manner next to each other
margin-bottom:30px; //move up 30px
@media(max-width:760px){
    flex-direction:column; //at >760 display column
}

`;

const Left = styled.div`
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
cursor:pointer;
`;

const Right = styled(Left)`
background:white;
opacity:0.6;
color:black;

`

const Down = styled.img`
margin-top:20px;
height:40px;
overflow-x:hidden;
animation: animateDown infinite 1.5s;  //defined in the index css as @keyframes
`

const Buttons = styled.div`

`