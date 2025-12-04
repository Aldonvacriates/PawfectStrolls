import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { inject } from '@vercel/analytics'

// import "../styles/swiper.css"

// Initialize Vercel Web Analytics
inject()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
