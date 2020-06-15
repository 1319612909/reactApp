import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter } from "react-router-dom"
import './index.css';
// 原始自带
// import * as serviceWorker from './serviceWorker';
// import App from './App';

import App from './components/app'


// 移动端需要引入的
import 'antd-mobile/dist/antd-mobile.css';  


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   (
//     <BrowserRouter>
//       <App />
//     </BrowserRouter> 
//   ),
//   document.getElementById('root')
// );

// 移动端需要的
ReactDOM.render(<App />,
  document.getElementById('root')
);


