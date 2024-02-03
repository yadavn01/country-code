import Button from './components/Button';
import './App.css';
import { useState } from 'react';
import CountryCapital from './components/CountryCapital';


function App() {

  // const [buttonColor , setButtonColor] = useState('red');

  const countryData = {
    "USA" : "Washington DC",
    "New Zealand" : "Wellington",
    "Nepal" : "Kathmandu",
    "France": "Paris",
  };
  const countryNames = Object.keys(countryData);

  const handleButtonClick = (country) => {
    // Handle button click here
    console.log(`${country}'s capital is ${countryData[country]}`);
  };

  // var changeColor = () => {
  //   const newColor = buttonColor === 'red' ? 'blue' : 'red';
  //   setButtonColor(newColor);
  // }

  return (
   <div className="main">
    <div className="leftPane">
        <CountryCapital countryNames={countryNames} onButtonClick={handleButtonClick}/>
    </div>
    <div className="rightPane">
      
    </div>
   </div>
  );
}

export default App;
