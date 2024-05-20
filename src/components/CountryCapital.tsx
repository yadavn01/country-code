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

  const [selected, setSelected] = useState<Option>();

  return (
    <>
      {options.map((option) => (
        <button
        key={option.value}
          className={option.state === 'SELECTED' ? 'selected' : ''}
          onClick={() => {
            if(!selected){
              setSelected(option)
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
            }
            else{
              if(selected.value === data[option.value] || data[option.value] === selected.value) {
                setOptions(options.filter(opt => {
                  return !(opt.value === selected.value || opt.value === option.value)
                }))
              } setSelected(undefined)
            }
         
            }}>
  { option.value}
        </button >
          ))}
        </>
    );
  };

export default CountryCapital;