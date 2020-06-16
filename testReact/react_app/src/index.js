import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter } from "react-router-dom"
import './index.css';
// 原始自带
// import * as serviceWorker from './serviceWorker';
// import App from './App';

import App from './components/app'

// 'react-redux'
import {Provider} from 'react-redux'
import ReduxApp from './components/firstApp/testRedux'
import store    from './components/redux/store'

// 移动端需要引入的
// import 'antd-mobile/dist/antd-mobile.css';    //r如果配置了按需加入，就可以不需要引入这个css

// 正常app组件
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



// function render(){
//   ReactDOM.render( <ReduxApp store={store} />,
//     document.getElementById('root')
//   );
// }

// // 初始化渲染
// render()

// // 重绘组件，取到新的状态，订阅监听（store状态变化了，就会自动调用）
// store.subscribe(render)

// 移动端需要的
// ReactDOM.render(<App />,
//   document.getElementById('root')
// );



// 有了react-redux 用下面的
  ReactDOM.render( (
    <Provider store={store}>
      <ReduxApp  />
    </Provider>  
  ),
        document.getElementById('root')
      );