import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';

const NumberSelector = ({ error, seterror, selectedNumber, setselectedNumber }) => {


    const arrnumber = [1, 2, 3, 4, 5, 6];

    const numberselectorhandler = (value) => {
        setselectedNumber(value);
        seterror("");


    }

    return (
        < Numberselectorcontainer>
            <p className='error'>{error}</p>
            <div className='flex'>
                {arrnumber.map((value, i) => (
                    <Box
                        key={i}
                        onClick={() => numberselectorhandler(value)}
                        isselected={value === selectedNumber}
                    >
                        {value}
                    </Box>
                ))}
            </div>
            <p>Select Number</p>
        </Numberselectorcontainer >
    )
}

export default NumberSelector;

const Numberselectorcontainer = styled.div`

display: flex;
flex-direction: column;
align-items: end;
margin-top:20px;


  
@media(min-width: 310px) and (max-width: 479px) {
    padding:20px;
}

.flex{
    display: flex;
    gap: 24px;
    transition:all .3s ease;
  
    :hover{
       box-shadow:0 4px 8px rgba(29, 45, 61, 0.6);
    }
}
p{
    font-size: 24px;
    font-weight: 700;
}
.error{
    color: red;
}

`;


const Box = styled.div`
            width: 72px;
            height: 72px;
            border: 1px solid black ;
            display: grid;
            place-items: center;
            font-size: 24px;
            font-weight: 700;
            background-color: ${(props) => (props.isselected ? "black" : "white")};
            color: ${(props) => (props.isselected ? "white" : "black")};
            cursor: pointer;

            

            `;
