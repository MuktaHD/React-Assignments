
import React from 'react';
import TemperatureConverter from './components/TemperatureConverter';
import Quiz from './components/Quiz';
import Table from './components/Table';

function App() {
  const questions = [
    {
        question: 'What is the capital of France?',
        answers: ['Paris', 'London', 'Berlin', 'Madrid'],
    },
    {
        question: 'Which is the largest planet?',
        answers: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    },
];

const headers = ['Name', 'Age', 'City'];
const data = [
    ['John Doe', '30', 'New York'],
    ['Jane Smith', '25', 'Los Angeles'],
    ['Sam Brown', '35', 'Chicago'],
];

    return (
      <>
        <div className="App">
            <h1>Temperature Converter</h1>
            <TemperatureConverter />
        </div>
         <div className="App">
         <h1>Quiz Application</h1>
         <Quiz questions={questions} />
     </div>
     <div className="App">
            <h1>Table Component</h1>
            <Table headers={headers} data={data} />
        </div>
     </>
    );
}

export default App;







// // import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';
// function App() {
//   const [counter, setCounter] = useState(15);

// const addValue = () => {
//   setCounter(counter+1);
//   console.log(counter);
// }
// const removeValue = () => {
// setCounter(counter-1);
// console.log(counter);

// }
//   return (
//    <>
//    <h1>Counter:{counter}</h1>
//    <button onClick={addValue}>Add</button>
//    <button onClick={removeValue}>Remove</button>
//    </>
//   );
// }

// export default App;


