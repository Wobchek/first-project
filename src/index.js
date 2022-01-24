import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  { id: 1, name: "Vovan" },
  { id: 2, name: "Vor" },
  { id: 3, name: "Volvo" },
  { id: 4, name: "Voran" },
  { id: 5, name: "Vokanda" },
];

let messages = [
  { id: 1, message: "hi, how are you?" },
  { id: 2, message: "Today is friday." },
  { id: 2, message: "Today is friday." },
  { id: 3, message: "No homework today." },
  { id: 3, message: "No homework today." },
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
