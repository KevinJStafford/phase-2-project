import '../App.css';
import DefaultChild from './DefaultChild';
import Navbar from './Navbar';
import {useEffect,useState} from 'react';
import {Outlet} from 'react-router-dom';
const API = 'https://family-fun-helper.onrender.com/activities'

function App() {
  const [ KidActivityData, setKidActivityData ] = useState([])
  const [search, setSearch] = useState('')
  const [costFilter, setCostFilter] = useState(false)
 

  useEffect(()=> {
    fetch(API)
      .then((r)=> r.json())
      .then((kidActivitiesArray)=> {
        setKidActivityData(kidActivitiesArray)
      });
  }, []);

  
  const toggleCost = (e, {value}) => {
    setCostFilter(value)
  }

  const filteredActivities = KidActivityData.filter((activity) => {
    if (activity.free === true) {
      return true
    } else {
      return false
    }
  })

  
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }
  
  const filteredKidActivityData = KidActivityData.filter((activity) => {
    const lowerCaseActivityName = activity.name.toLowerCase()
    const lowerCaseActivityDescription = activity.description.toLowerCase()
    const lowerCaseSearch = search.toLowerCase()
    
    return lowerCaseActivityName.includes(lowerCaseSearch) || lowerCaseActivityDescription.includes(lowerCaseSearch)}
    )
    const theActivitiesToPassDown = costFilter ? filteredActivities : filteredKidActivityData;
    
    const sortedActivities = [...theActivitiesToPassDown]
    
  function onNewActivity(newActivity){
    setKidActivityData((currentActivities)=>[...currentActivities,newActivity])
  }

  const context = {
    onNewActivity,
    activities: sortedActivities,
  }


  return (
    <div>
      <Navbar handleSearchChange={handleSearchChange} toggleCost={toggleCost} />
      <Outlet context={context} />
    </div>
  );
}

export default App;
