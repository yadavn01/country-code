import { useState } from 'react';

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


    //   const handleButtonClick = () => {
    //     // Handle button click here
    //     setColour({
    //         ...options,
    //         [option] : 'blue',
    //     })
    //     setActive(!active);
    //   };

    return (
        <>
<div className="main">
    <div className="leftPane">
        {options.map((option) => (
         <button style={{ margin: '5px', colour}} onClick={()=> { 
            setColour ({
                ...options,
                [option] : 'blue',
            })
         }}>
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