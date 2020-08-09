import React from 'react'
import ReactDOM from 'react-dom'
import { PMain } from "./pages/PMain"
import 'semantic-ui-css/semantic.min.css'
import './css/App.css'
import './css/fonts.css'

ReactDOM.render(
  <React.StrictMode>
    <PMain/>
  </React.StrictMode>,
  document.getElementById('root')
);
