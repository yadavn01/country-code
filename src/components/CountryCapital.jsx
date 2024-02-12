import { useState } from 'react';

// let buttonState = "DEFAULT" | "SELECTED" | "WRONG";
// const blueColor = "blue";


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
        label: value,
        value,
        state: 'DEFAULT',

      })))
      options.sort(() => Math.random() - 0.5);

        const handleButtonClick = (option) => {
            // Handle button click here
            // Determine if the clicked option is correct or incorrect
            // const isCorrect = countryNames.includes(option) && countryData[option] === countryCapitals[countryNames.indexOf(option)];
          
            setOptions((prevOptions) => {
              return prevOptions.map((prevOption) => {
                if (prevOption.value === option) {
                  return { ...prevOption, state: 'SELECTED' };
                }
                return prevOption;
              });
            });
          };

    return (
        <>
<div className="main">
    <div className="leftPane">
        {options.map((option) => (
         <button 
         key={option.value}
         className={option.state === 'SELECTED' ? 'SELECTED' : "" }
          style={{
            margin: '5px',
            backgroundColor:
        option.state === 'SELECTED'
          ? 'blue'
          : countryData[option.value] === option.label
          ? 'green'
          : 'red',
          }} 
          onClick={()=> {handleButtonClick(option.value)}}>
                {option.label}
              </button>
        ))}
    </div>

    {/* <div className="rightPane">
    {options.map((option) => (
         <button  style={{
            margin: '5px',
            backgroundColor: colour[option] === "SELECTED" ? 'blue' : 'initial'
          }} onClick={()=> {handleButtonClick(option)}}>
                {option}
              </button>
        ))}
      
    </div> */}
   </div>
        </>
    );
  };

  export default CountryCapital;