import './App.css';
import CountryCapital from './components/CountryCapital';


function App() {

  return (
    <CountryCapital data={{
      "USA" : "Washington DC",
      "New Zealand" : "Wellington",
      "Nepal" : "Kathmandu",
      "France": "Paris",
    }}></CountryCapital>
  );
}

export default App;
