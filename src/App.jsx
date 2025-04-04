import styled from "styled-components"
import Startgame from "./Components/Startgame";
import Gameplay from "./Components/Gameplay";
import { useState } from "react";




function App() {

  const [isgamestarted, setisgamestarted] = useState(false);

  const togglegameplay = () => {
    setisgamestarted((previous) => !previous);
  };

  return (
    <>
      {isgamestarted ? <Gameplay /> : <Startgame toggle={togglegameplay} />}

    </>
  )
}

export default App
