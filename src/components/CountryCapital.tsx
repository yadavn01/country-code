import React from 'react';
import { useEffect, useState } from 'react';

type ButtonState = 'DEFAULT' | 'SELECTED' | 'WRONG';
type Option = {
  value: string;
  state: ButtonState;
}


const CountryCapital = ({ data }: { data: Record<string, string> }) => {


  const countryNames = Object.keys(data);
  const countryCapitals = Object.values(data);
  const [options, setOptions] = useState<Option[]>(
    [...countryNames, ...countryCapitals]
    .sort(() => Math.random() - 0.5) 
    .map(value => ({
      value,
      state: "DEFAULT",
    }))
  );

  // useEffect(() => {
  //   options.map((value) => ({
  //     label: value,
  //     value,
  //     state: 'DEFAULT',
  //   }))
  //   
  //   // setOptions(initialOptions);
  // }, []);

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
          className={option.state === 'SELECTED' ? 'selected' : ''}
          onClick={() => {
            //setting color to blue
            setOptions(options.map(opt => {
              return opt === option ? 
                {
                  ...opt,
              state: "SELECTED",
                } : opt;
              }
            )
            );
            }}>
  { option.value}
        </button >
          ))}
        </>
    );
  };

export default CountryCapital;