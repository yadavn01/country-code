import { useEffect, useState } from 'react';


const CountryCapital = () => {

    const countryData = {
        "USA" : "Washington DC",
        "New Zealand" : "Wellington",
        "Nepal" : "Kathmandu",
        "France": "Paris",
      };
      
      const countryNames = Object.keys(countryData);
      const countryCapitals = Object.values(countryData);
      //const options = [...countryNames, ...countryCapitals];
      const [options , setOptions] = useState([]);
      useEffect(()=> {
          const initialOptions = [...countryNames, ...countryCapitals].map((value) => ({
            label: value,
            value,
            state: 'DEFAULT',
          }))
          initialOptions.sort(() => Math.random() - 0.5);
          setOptions(initialOptions);
      },[]);

        const handleButtonClick = (option) => {
            // Handle button click here
            // Determine if the clicked option is correct or incorrect
            // const isCorrect = countryNames.includes(option) && countryData[option] === countryCapitals[countryNames.indexOf(option)];
            const isCorrect = countryData[option] === countryNames[countryCapitals.indexOf(option)];

            setOptions((prevOptions) => {
              return prevOptions.map((prevOption) => {
            
                if (prevOption.value === option) {
                  return { ...prevOption, state: isCorrect ? 'correct' : 'incorrect' };
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
         className={`button ${option.state === 'selected' ? 'selected' : ''}`}
         style={{
            margin: '5px',
          }} 
          onClick={()=> {handleButtonClick(option.value)}}>
                {option.label}
              </button>
        ))}
    </div>
   </div>
        </>
    );
  };

  export default CountryCapital;