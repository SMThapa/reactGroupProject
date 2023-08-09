import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css'
import { ScrollToTop } from './Others/ScrollToTop.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop/>
      <App />
    </Router>
  </React.StrictMode>,
)
