// import logo from '../logo.svg';
import '../App.css';
import Navbar from './Navbar';
import ActivityForm from './ActivityForm';
import Activities from './Activities';
import RandomButton from './RandomButton';
import DefaultChild from './DefaultChild';
import {useEffect,useState} from 'react';
import {Outlet} from 'react-router-dom';

function App() {
  const [ KidActivityData, setKidActivityData ] = useState([])
  const [search, setSearch] = useState('')
 

  useEffect(()=> {
    fetch('http://localhost:8000/activities')
      .then((r)=> r.json())
      .then((kidActivitiesArray)=> {
        setKidActivityData(kidActivitiesArray)
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredKidActivityData = KidActivityData.filter((activity) => {
    const lowerCaseActivityName = activity.name.toLowerCase()
    const lowerCaseActivityDescription = activity.description.toLowerCase()
    const lowerCaseSearch = search.toLowerCase()

    return lowerCaseActivityName.includes(lowerCaseSearch) || lowerCaseActivityDescription.includes(lowerCaseSearch);
  })

  function onNewActivity(newActivity){
    setKidActivityData((currentActivities)=>[...currentActivities,newActivity])
  }

  const context = {
    onNewActivity,
    activities: filteredKidActivityData,
  }

  return (
    <div>
      <Navbar handleSearchChange={handleSearchChange}/>
      <DefaultChild />
      {/* <ActivityForm onNewActivity = {onNewActivity} />
      <Activities activities = {filteredKidActivityData} />
      <RandomButton  /> */}
      <Outlet context={context} />
    </div>
  );
}

export default App;
