import styled from "styled-components"


const RollDice = ({ currentyDice, rolldice }) => {


  return (
    <Dicecontainer >
      <div className="dice" onClick={rolldice}>
        <img src={`/six dice/dice_${currentyDice}.png`} alt="dice1image" />
      </div>

      <p>Click on Dice to roll</p>
    </Dicecontainer>
  )
}

export default RollDice;

const Dicecontainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;
margin-bottom:30px;

   
.dice{
  cursor:pointer;
  border:1px solid black;
  border-radius:23px;
  margin-bottom:10px;
  
}

@media(min-width: 310px) and (max-width: 479px) {
       margin-left: 130px;
       width: 100%;
      }

`;
