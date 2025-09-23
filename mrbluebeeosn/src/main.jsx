import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/public/assets/css/style.css'
// import '/public/assets/js/main.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)