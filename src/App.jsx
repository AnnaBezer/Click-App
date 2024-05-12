import { useState } from 'react';
import './App.css';
import Todos from './components/todos/Todos';

const colors = ['#009B72', '#6761A8', '#347E8D', '#AD636C', '#798186'];
//                 0          1           2          3          4

const App = () => {
  // orice schimbare a unei variabile din state
  // va reincarca componenta (re-render)
  let [number, setNumber] = useState(0); // hook
  let [isRed, setIsRed] = useState(false);
  let [colorIndex, setColorIndex] = useState(0);

  const incrementByOne = () => {
    setNumber(number + 1);
  };

  const decrementByOne = () => {
    setNumber(number - 1);
  };

  const switchColor = () => {
    if(isRed === true) {
      setIsRed(false);
    } else {
      setIsRed(true);
    }
  };

  const switchBackgroundColor = () => {
    if (colorIndex === 4) {
      setColorIndex(0);
    } else {
      setColorIndex(colorIndex + 1);
    }
  }

  return (
    <div style={{
      backgroundColor: colors[colorIndex]
    }}>
        <h1 className={isRed === true ? 'text-red' : null}>{number}</h1>
        <h4> {colors[colorIndex]} </h4>
        <button onClick={incrementByOne}> Increment </button>
        <button onClick={decrementByOne}> Decrement </button>
        <button onClick={switchColor}> Switch color </button>
        <button onClick={switchBackgroundColor}> Switch background-color </button>

        <Todos />
    </div>
  )
}

export default App
