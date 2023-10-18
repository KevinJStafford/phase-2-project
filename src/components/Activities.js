import {useOutletContext} from "react-router-dom";
import ActivityCard from "./ActivityCard";

function Activities(){
  const {activities} = useOutletContext();
  const aComponents = activities.map((activityobj)=>(
    <ActivityCard key = {activityobj.id} oneActivity = {activityobj}/>
));



    return(
        <ul className="cards">
            {aComponents}
        </ul>
    );
}

export default Activities;