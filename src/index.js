import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IssueReporter from './issue-report-junyi/IssueReporter'
// import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <h1>我是底圖</h1>
    <p>Hello</p>
    <IssueReporter
        isFromReportPage={false}
      />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
