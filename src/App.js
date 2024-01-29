import Button from './components/Button';
import './App.css';
import { useState } from 'react';


function App() {

  const [buttonColor , setButtonColor] = useState('red');

  var changeColor = () => {
    setButtonColor('blue');
  }

  return (
   <div className="main">
    <div className="leftPane">
       <Button className="button" style={{ backgroundColor: buttonColor }} onClick={changeColor}></Button>
    </div>
    <div className="rightPane">
      Capitals
    </div>
   </div>
  );
}

export default App;
