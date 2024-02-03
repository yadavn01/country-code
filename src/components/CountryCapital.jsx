import Button from './components/Button';


const CountryCapital = ({ countryNames, onButtonClick }) => {

    return (
        <>
        {countryNames.map((country) => (
              <Button key={country} style={{ margin: '5px' }} onClick={() => onButtonClick(country)}>
                {country}
              </Button>
        ))}
        </>
    );
  };

  export default CountryCapital;