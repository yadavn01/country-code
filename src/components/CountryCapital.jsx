import { useState } from 'react';

// let buttonState = "DEFAULT" | "SELECTED" | "WRONG";
// const blueColor = "blue";
interface Option {
    value: string;
    state: string;
}

const CountryCapital = () => {
    const [colour, setColour] = useState({});

    const countryData = {
        "USA" : "Washington DC",
        "New Zealand" : "Wellington",
        "Nepal" : "Kathmandu",
        "France": "Paris",
      };
      const countryNames = Object.keys(countryData);
      const countryCapitals = Object.values(countryData);
      //const options = [...countryNames, ...countryCapitals];
      const [options , setOptions] = useState([...countryNames, ...countryCapitals].map((value) => ({
        value,
        state: 'DEFAULT',

      })))
      options.sort(() => Math.random() - 0.5);


      const handleButtonClick = (option) => {
        // Handle button click here
            // Determine if the clicked option is correct or incorrect
    const isCorrect = countryNames.includes(option) && countryData[option] === countryCapitals[countryNames.indexOf(option)];

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
            backgroundColor: colour[option] === "SELECTED" ? 'blue' : 'initial'
          }} onClick={()=> {handleButtonClick(option)}}>
                {option}
              </button>
        ))}
    </div>

    <div className="rightPane">
    {options.map((option) => (
         <button  style={{
            margin: '5px',
            backgroundColor: colour[option] === "SELECTED" ? 'blue' : 'initial'
          }} onClick={()=> {handleButtonClick(option)}}>
                {option}
              </button>
        ))}
      
    </div>
   </div>
        </>
    );
  };

  export default CountryCapital;