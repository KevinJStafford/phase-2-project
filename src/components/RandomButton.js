import React, {useState} from "react"
import { getRandomActivity } from "./data/randomActivity";
import RandomActivityCard from "./RandomActivityCard";
import {Grid} from 'semantic-ui-react';
import ConfettiExplosion from 'react-confetti-explosion';


function RandomButton() {
  const [randomActivity, setRandomActivity] = useState([])
  const [isClicked, setIsClicked] = useState(false)
  const [isExploding, setIsExploding] = useState(false)


  function handleClick(e) {
    setRandomActivity(getRandomActivity())
  }

  const toggleActivity = () => {
    setIsClicked(true)
    setIsExploding(true)
  }
    

        
        
  return (
    <Grid centered>
      <Grid.Column textAlign="center">
        <div className="centered">
          {isClicked ? (
          <div div className="card-container">
            <RandomActivityCard randomActivity={randomActivity} />
          </div>
            ) : null}
          </div>
          <div>
            {isExploding ? (<div><ConfettiExplosion /></div>) : null}
            <button onClick={handleClick} class="ui basic button" className="buttonStyle">
              <div onClick={toggleActivity} >Can't Decide?</div>
              <div onClick={toggleActivity} >Let The AI Choose!</div>
            </button>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
  
    export default RandomButton;