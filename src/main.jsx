import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from './store/useStore';
import App from './App'
import './index.css'


const StoreProvider = createStore({})

ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StoreProvider>
)
