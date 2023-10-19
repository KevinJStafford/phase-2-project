import React, {useState} from "react"
import { getRandomActivity } from "./data/randomActivity";
import RandomActivityCard from "./RandomActivityCard";
import { Grid } from 'semantic-ui-react';


function RandomButton() {
    const [randomActivity, setRandomActivity] = useState([])
    const [isClicked, setIsClicked] = useState(false)
    
    function handleClick() {
        setRandomActivity(getRandomActivity())
        
    }

    const toggleActivity = () => {
        setIsClicked(true)
    }
    console.log(isClicked)

        
        
    return (
        <Grid centered>
          <Grid.Column textAlign="center">
            <div onClick={toggleActivity} className="centered">
              {isClicked ? (
                <div div className="card-container">
                  <RandomActivityCard randomActivity={randomActivity} />
                </div>
              ) : null}
              <button onClick={handleClick} id="random-activity">
                Can't Decide? Click to get a random activity
              </button>
            </div>
          </Grid.Column>
        </Grid>
      );
}


export default RandomButton;