// import logo from '../logo.svg';
import '../App.css';
import Navbar from './Navbar';
// import Form from './Form';
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

  return (
    <div>
      <Navbar/>
      {/* <Form/> */}
      <Activities activities = {KidActivityData} />
      <RandomButton  />
    </div>
  );
}

export default App;
