import Totakscore from './Totakscore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'
import Rules from './Rules'
import Highscore from './Highscore'

const Gameplay = () => {

    const [selectedNumber, setselectedNumber] = useState(null)
    const [currentyDice, setcurrentyDice] = useState(1);
    const [score, setscore] = useState(0);
    const [error, seterror] = useState("");
    const [showrules, setshowrules] = useState(false);
    // const [high_score, sethigh_score] = useState(0)

    const generteRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const rolldice = () => {

        if (!selectedNumber) {
            seterror("You have not selected any number");
            return;
        };
        seterror("");
        const randomNumber = generteRandomNumber(1, 7);
        setcurrentyDice((prev) => randomNumber);



        if (selectedNumber === randomNumber) {
            setscore(prev => prev + randomNumber);
        } else {
            setscore(prev => prev - 1);
        }

        // sethigh_score(Math.max(high_score, score));

        setselectedNumber(undefined);


    };

    const resetscore = () => {
        setscore(0);
    }


    return (
        < >
            <MainContainer>
                <div className='topsection'>
                    <Totakscore score={score} />
                    <Highscore currentScore={score} />
                    <NumberSelector
                        error={error}
                        seterror={seterror}
                        selectedNumber={selectedNumber}
                        setselectedNumber={setselectedNumber}
                    />
                </div>
                <RollDice currentyDice={currentyDice} rolldice={rolldice} />

                <div className="btn">
                    <Button className='reset' onClick={resetscore}>Reset</Button>
                    <Button
                        onClick={() => setshowrules((prev) => !prev)}>
                        {showrules ? "Hide" : "Show"} Rules</Button>
                </div>

                {showrules && <Rules />}
            </MainContainer >
        </>
    )
}

export default Gameplay;

const MainContainer = styled.main`

.btn{
     @media(min-width: 310px) and (max-width: 479px) {
       margin-left: 180px;
      }
 }

.topsection {
    display: flex;
    justify-content: space-evenly;
    width: 100% ;
    max-width: 1200px;
    margin-bottom: 20px ;
    padding: 0 15px;
    flex-wrap: wrap ;
    align-items: flex-end;

   
@media(min-width: 310px) and (max-width: 479px) {
        flex-direction: column;
        align-items: center;
        gap: 15px;
         
    }
}

.reset{
    color: #000000;
    background-color:white;
    border: 1px solid black;

 &:hover{
    background-color:black;
    border: 1px solid black;
    color: white;
    transition:.3s background-color ease-in;
 }
  
 
}

 
`;
const Button = styled.div`
margin:10px auto;
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