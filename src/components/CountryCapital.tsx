import React from 'react';
import { useEffect, useState } from 'react';

type ButtonState = 'DEFAULT' | 'SELECTED' | 'WRONG';


const CountryCapital = ({ data }: {data: Record<string, string>}) => {


      const countryNames = Object.keys(data);
      const countryCapitals = Object.values(data);
      const options = [...countryNames, ...countryCapitals];
      const [colorMap, setColorMap] = useState<Record<string,string>>({});
      //const [options , setOptions] = useState([]);

      options.sort(() => Math.random() - 0.5);
      // useEffect(()=> {
      //     options.map((value) => ({
      //       label: value,
      //       value,
      //       state: 'DEFAULT',
      //     }))
         
      //    // setOptions(initialOptions);
      // },[]);

        // const handleButtonClick = (option) => {
        //     // Handle button click here
        //     // Determine if the clicked option is correct or incorrect
        //     // const isCorrect = countryNames.includes(option) && countryData[option] === countryCapitals[countryNames.indexOf(option)];
        //     const isCorrect = countryData[option] === countryNames[countryCapitals.indexOf(option)];

        //   };

    return (
        <>
        {options.map((option) => (
          <button
         className= {colorMap[option] === 'SELECTED' ? 'selected' : ''}
          onClick={()=> {
            //setting color to blue
            setColorMap({
              ...colorMap,
              [option]: "SELECTED",
            });
          }}>
                {option}
             
              </button>
        ))}
        </>
    );
  };

  export default CountryCapital;