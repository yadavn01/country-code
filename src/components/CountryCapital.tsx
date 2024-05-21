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
  const isGameOver = options.length === 0;

  if(isGameOver) {
    return <div className='message'>Congratulations </div>
  }


  return (
    <>
      {options.map((option) => (
        <button
        key={option.value}
          className={option.state === 'SELECTED' ? 'selected' : option.state === 'WRONG' ? 'wrong' : '' }
          onClick={() => {
            //set to default
            setOptions(options.map(opt => (
                {
                    ...opt,
                    state: "DEFAULT",
                }) 
             
             ));

            if(!selected){
              setSelected(option)
                 //if selected correct pair
            setOptions(options.map(opt => {
              return opt === option ? 
                {
                  ...opt,
              state: "SELECTED",
                } : {...opt, state: "DEFAULT"};
              }
            )
            );
            }
            else{
              if(selected.value === data[option.value] || data[option.value] === selected.value) {
                setOptions(options.filter(opt => {
                  return !(opt.value === selected.value || opt.value === option.value)
                }))
              } 
              else {
                //wrong pair
                setOptions(options.map(opt => {
                    return (
                        opt.value === selected.value || opt.value === option.value
                    )
                    ? 
                      {
                        ...opt,
                    state: "WRONG",
                      } : {...opt, state: "DEFAULT"};
                    }
                  )
                  );

              }
              setSelected(undefined)
            }
         
            }}>
  { option.value}
        </button >
          ))}
        </>
    );
  };

export default CountryCapital;