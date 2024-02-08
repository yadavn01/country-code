import { useState } from 'react';

// let buttonState = "DEFAULT" | "SELECTED" | "WRONG";
// const blueColor = "blue";
const CountryCapital = () => {
    const [active, setActive] = useState('');
    const [colour, setColour] = useState({});

    const countryData = {
        "USA" : "Washington DC",
        "New Zealand" : "Wellington",
        "Nepal" : "Kathmandu",
        "France": "Paris",
      };
      const countryNames = Object.keys(countryData);
      const countryCapitals = Object.values(countryData);
      const options = [...countryNames, ...countryCapitals];
      options.sort(() => Math.random() - 0.5);


      const handleButtonClick = (option) => {
        // Handle button click here
        setColour(prevState => ({
            ...prevState,
            [option] : "SELECTED",
        }))};

    return (
        <>
<div className="main">
    <div className="leftPane">
        {options.map((option) => (
         <button  style={{
            margin: '5px',
            backgroundColor: colour[option] === "SELECTED" ? 'blue' :
                             colour[option] === "CORRECT" ? 'green' :
                             colour[option] === "INCORRECT" ? 'red' : 'initial'
          }} onClick={handleButtonClick(option)}>
                {option}
              </button>
        ))}
    </div>
    <div className="rightPane">
    {options.map((option) => (
         <button key={option} style={{ margin: '5px' }} onClick={()=> { 
            setColour ({
                ...options,
                [option] : 'blue',
            })
         }}>
                {option}
              </button>
        ))}
      
    </div>
   </div>
        </>
    );
  };

  export default CountryCapital;