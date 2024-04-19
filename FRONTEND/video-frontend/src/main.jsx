import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './component/Navbar.jsx'
import { store } from '../src/store/store.js'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,

} from "react-router-dom";


import './index.css'
import { SideBar } from './component/SideBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
    <Router>
<SideBar/>
    {/* <App /> */}
    </Router>
    </Provider>
  </React.StrictMode>,
)
