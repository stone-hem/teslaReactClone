import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/cars/CarsCreate';
import { useSelector } from 'react-redux';

function Header() {
  const [SideNavStatus,setSideNavStatus]=useState(false);
  const cars=useSelector(selectCars);
  return (
    <Container>
      <a>
        <img src='/images/logo.svg' alt="none" />
      </a>
      <Menu>
        {cars &&cars.map((car,index)=>(
           <a key={index} href='#'>{car}</a>
          ))}
      </Menu>
      <RightEnd>
        <a href='#'>Shop</a>
        <a href='#'>tesla account</a>
        <CustomMenu onClick={()=>setSideNavStatus(true)}/>
      </RightEnd>
      <NavMenu show={SideNavStatus}>
        <CloseWrap>
          <CustomClose onClick={()=>setSideNavStatus(false)}/>
        </CloseWrap>
        {cars &&cars.map((car,index)=>(
            <li key={index}>
            <a href='#'>{car}</a>
          </li>
          ))}
           <li>
            <a href='#'>Existing Inventory</a>
          </li>
       
        <li>
          <a href='#'>Use Inventory</a>
        </li>
        <li>
          <a href='#'>Trade in </a>
        </li>
        <li>
          <a href='#'>Cyber Track</a>
        </li>
      </NavMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
min-height:50px; //height
position:fixed; //always at the top even when scrolling
display:flex;
align-items:center;
justify-content:space-between;
padding: 0 20px;
top: 0;
left:0;
right:0;
z-index:1;


`;

const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a{
  font-weight:600;
  text-transform:uppercase;
  padding:0 10px; //top, bottom 0 side 10px
  flex-wrap:nowrap;
}
@media(max-width:768px){
  display:none;
}
`

const RightEnd = styled.div`
display:flex;
align-items:center;
a{
  font-weight:600;
  text-transform:uppercase;
  margin-right:10px; //top, bottom 0 side 10px
}
`

const CustomMenu = styled(MenuIcon)`
cursor:pointer;

`

const NavMenu = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:10;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transform:${props=>props.show? `translateX(0)`:`translateX(100%)`}; //side bar translation
transition:transform 0.8s; //ease the transformation
li{
  padding:20px 10px;
  border-bottom:1px solid rgba(0,0,0,.2);
  a{
    font-weight:600;
  }
}
`

const CustomClose = styled(CloseIcon)`
cursor:pointer;
`

const CloseWrap = styled.div`
display:flex;
justify-content:flex-end;
`