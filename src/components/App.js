import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Activities from './Activities';
import Navbar from './Navbar';
import Form from './Form';
import RandomButton from './RandomButton';

function App() {
  const [ kidActivitiesData, setKidActivitiesData ] = useState([])

  useEffect(()=> {
    fetch('http://localhost:3000/')
      .then((r)=> r.json())
      .then((KidActivitiesArray)=> {
        setKidActivitiesData(KidActivitiesArray)
      });
  }, []);





  return (
    <div>
      <Activities activities={kidActivitiesData} />
      <Navbar/>
      <Form/>
      <RandomButton/>
    </div>
  );
}

export default App;
