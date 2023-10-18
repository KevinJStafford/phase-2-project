// import logo from '../logo.svg';
import '../App.css';
import Navbar from './Navbar';
import ActivityForm from './ActivityForm';
import Activities from './Activities';
import RandomButton from './RandomButton';
import {useEffect,useState} from 'react';

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

  return (
    <div>
      <Navbar handleSearchChange={handleSearchChange}/>
      <ActivityForm onNewActivity = {onNewActivity} />
      <Activities activities = {filteredKidActivityData} />
      <RandomButton  />
    </div>
  );
}

export default App;
