import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'




const Startgame = ({ toggle }) => {
    return (
        <Container>
            <div>
                <img className='image' src="/images/dice.png" alt="" />
            </div>
            <div className='content'>
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    )
}

export default Startgame;

const Container = styled.div`
 max-width: 1180px;
 height: 100vh;
 display: flex;
 margin: 0 auto;
 align-items:center;

.image{
    height:400px;
    width:500px;

    @media(min-width: 310px) and (max-width: 479px) {
        height:300px;
        width:400px;
      }

 }

 .content  {
    h1{
        font-size: 96px;
        @media(min-width: 310px) and (max-width: 479px) {
            font-size: 70px;
        }
    }
     
  }

  @media(min-width: 310px) and (max-width: 479px) {
       display: flex;
       flex-direction: column;
       margin: 30px;
      }
 
 `;

const Button = styled.div`
color: white;
background-color:black;
padding:10px 18px;
border: none;
border-radius:5px;
width: 220px;
text-align:center;
font: 18px;
cursor: pointer;
border: 1px solid transparent;
transition:.4s background-color ease-in;



&:hover{
    background-color:white;
    border: 1px solid black;
    color: black;
    transition:.3s background-color ease-in;
 }
 
 

`;