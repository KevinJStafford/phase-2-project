import logo from '../logo.svg';
import '../App.css';
import Navbar from './Navbar';
import Form from './Form';
import Activities from './Activities';
import RandomButton from './RandomButton';

function App() {
  return (
    <div>
      <Navbar/>
      <Form/>
      <Activities/>
      <RandomButton/>
    </div>
  );
}

export default App;
