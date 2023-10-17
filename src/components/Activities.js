import ActivityCard from "./ActivityCard";

function Activities({activities}){
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