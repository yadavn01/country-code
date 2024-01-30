import Button from './components/Button';
import './App.css';
import { useState } from 'react';
import CountryCapital from './components/CountryCapital';


function App() {

  const [buttonColor , setButtonColor] = useState('red');

  const countryData = {
    "USA" : "Washington DC",
    "New Zealand" : "Wellington",
    "Nepal" : "Kathmandu",
    "France": "Paris",
  };

  var changeColor = () => {
    const newColor = buttonColor === 'red' ? 'blue' : 'red';
    setButtonColor(newColor);
  }

  return (
   <div className="main">
    <div className="leftPane">
       <Button className="button" style={{ backgroundColor: buttonColor }} onClick={changeColor}>
       <CountryCapital data={countryData} />
       </Button>
    </div>
    <div className="rightPane">
      
    </div>
   </div>
  );
}

export default App;
