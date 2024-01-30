const CountryCapital = ({ data }) => {
    return (
        <ul>
        {Object.entries(data).map((country, capital) => (
            <li key={country}>
                {country} : {capital}
            </li>
        ))}
        </ul>
    );
  };

  export default CountryCapital;