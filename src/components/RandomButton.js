import React, {useState} from "react"
import { getRandomActivity } from "./data/randomActivity";
import RandomActivityCard from "./RandomActivityCard";



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
        <div onClick={toggleActivity} className="centered">
                {isClicked ? <div><RandomActivityCard randomActivity={randomActivity} /></div> : null }
    
            <button onClick={handleClick} id="random-activity">Can't Decide? Click to get a random activity</button>
        </div>
    )
}


export default RandomButton;


















// export default RandomButton;