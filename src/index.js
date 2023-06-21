import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import tweetsArray from './App';
import reportWebVitals from './reportWebVitals';
import Tweet from "./components/Tweet";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Tweet tweet={ tweetsArray[0] }></Tweet>
<Tweet tweet={ tweetsArray[0] }></Tweet>
<Tweet tweet={ tweetsArray[0] }></Tweet>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
