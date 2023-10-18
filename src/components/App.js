// import logo from '../logo.svg';
import '../App.css';
// import Navbar from './Navbar';
import ActivityForm from './ActivityForm';
import Activities from './Activities';
import RandomButton from './RandomButton';
import {useEffect,useState} from 'react';

function App() {
  const [ KidActivityData, setKidActivityData ] = useState([])
 

  useEffect(()=> {
    fetch('http://localhost:8000/activities')
      .then((r)=> r.json())
      .then((kidActivitiesArray)=> {
        setKidActivityData(kidActivitiesArray)
      });
  }, []);

  function onNewActivity(newActivity){
    setKidActivityData((currentActivities)=>[...currentActivities,newActivity])
  }
  return (
    <div>
      {/* <Navbar/> */}
      <ActivityForm onNewActivity = {onNewActivity} />
      <Activities activities = {KidActivityData} />
      <RandomButton  />
    </div>
  );
}

export default App;
