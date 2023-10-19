import React, {useState} from "react"
import { getRandomActivity } from "./data/randomActivity";
import RandomActivityCard from "./RandomActivityCard";
import { Grid, Button } from 'semantic-ui-react';


function RandomButton() {
    const [randomActivity, setRandomActivity] = useState([])
    const [isClicked, setIsClicked] = useState(false)
    
    function handleClick(e) {
        setRandomActivity(getRandomActivity())
        console.log(e)
    }

    const toggleActivity = () => {
        setIsClicked(true)
    }
    console.log(isClicked)

        
        
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
              <button onClick={handleClick} class="ui basic button" className="buttonStyle">
                <div onClick={toggleActivity} >Can't Decide?</div>
                <div>Let The AI Choose!</div>
              </button>
            </div>

          </Grid.Column>
        </Grid>
      );
    }
  
    export default RandomButton;