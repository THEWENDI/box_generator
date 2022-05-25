import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
// array of box properties to render
const [boxs, setBox] = useState([]);



// updated setter function to receive new box properties from the form
function makeNewBox(boxProperties) {
  setBox([...boxs, boxProperties])
}

return (
  <div className="App">
    <BoxForm makeBox={makeNewBox} />
    {boxs.map((boxProperties, index) => <BoxDisplay key={index} boxProperties={boxProperties} />)}
  </div>
);
}

export default App;
