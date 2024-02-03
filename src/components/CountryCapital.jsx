// import Button from './components/Button';

const CountryCapital = () => {

    const countryData = {
        "USA" : "Washington DC",
        "New Zealand" : "Wellington",
        "Nepal" : "Kathmandu",
        "France": "Paris",
      };
      const countryNames = Object.keys(countryData);
      const countryCapitals = Object.values(countryData);
      const options = [...countryNames, ...countryCapitals];
    
      const handleButtonClick = (country) => {
        // Handle button click here
        console.log(`${countryNames}'s capital is ${countryCapitals}`);
      };

    return (
        <>

<div className="main">
    <div className="leftPane">
        {countryNames.map((country) => (
         <button key={country} style={{ margin: '5px' }} onClick={handleButtonClick}>
                {country}
              </button>
        ))}
        {/* <CountryCapital countryNames={countryNames} onButtonClick={handleButtonClick}/> */}
    </div>
    <div className="rightPane">
    {countryCapitals.map((capitals) => (
         <button key={capitals} style={{ margin: '5px' }} onClick={handleButtonClick}>
                {capitals}
              </button>
        ))}
      
    </div>
   </div>
   

        </>
    );
  };

  export default CountryCapital;