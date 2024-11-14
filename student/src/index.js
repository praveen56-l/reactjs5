import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form1 from './deatils/Form1';
import Formcontroldata from './deatils/Formcontroldata';
import Form2 from './deatils/Form2';
import Form3 from './deatils/Form3';
import Form4 from './deatils/Form4';
import Form5 from './Form5';
import Form7 from './Form7';
import Form8 from './Form8';
import Arrayform from './deatils/Arrayform';
import State1 from './State1';
import Useeffect from './Useeffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Form/> */}
    {/* <Form1/> */}
    {/* <Form2/> */}
      {/* <Form4/> */}
      {/* <Form5/> */}
      {/* <Form8/> */}
       {/* <Form6/> */}
       {/* <Form7/> */}
       {/* <Arrayform/> */}
       {/* <Arryimg/> */}
       {/* <State1/> */}
       <Useeffect/>
  
    {/* <Formcontroldata/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
