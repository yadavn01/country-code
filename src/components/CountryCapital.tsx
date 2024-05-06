import { useEffect, useState } from 'react';


const CountryCapital = ({ data }: {data: Record<string, string>}) => {

    const countryData = {
        "USA" : "Washington DC",
        "New Zealand" : "Wellington",
        "Nepal" : "Kathmandu",
        "France": "Paris",
      };
      
      const countryNames = Object.keys(countryData);
      const countryCapitals = Object.values(countryData);
      const options = [...countryNames, ...countryCapitals];
      const [colorMap, setColorMap] = useState<Record<string,string>>({});
      //const [options , setOptions] = useState([]);
      useEffect(()=> {
          options.map((value) => ({
            label: value,
            value,
            state: 'DEFAULT',
          }))
          options.sort(() => Math.random() - 0.5);
         // setOptions(initialOptions);
      },[]);

        const handleButtonClick = (option) => {
            // Handle button click here
            // Determine if the clicked option is correct or incorrect
            // const isCorrect = countryNames.includes(option) && countryData[option] === countryCapitals[countryNames.indexOf(option)];
            const isCorrect = countryData[option] === countryNames[countryCapitals.indexOf(option)];

            // setOptions((prevOptions) => {
            //   return prevOptions.map((prevOption) => {
            
            //     if (prevOption.value === option) {
            //       return { ...prevOption, state: isCorrect ? 'correct' : 'incorrect' };
            //     }
            //     return prevOption;
            //   });
            // });
          };

    return (
        <>
        {options.map((option) => (
         <button 
         key={option.value}
         className={`button ${option.state === 'selected' ? 'selected' : ''}`}
         style={{
            margin: '5px',
          }} 
          onClick={()=> {
            //setting color to blue
            setColorMap ({
              ....colorMap,
              [option]: '09Bff'
            })
          }}>
                {option}
             
              </button>
        ))}
        </>
    );
  };

  export default CountryCapital;