import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="618904153472-dr20jok9nnm872inkugs6vnabvskjbrt.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>;
  </React.StrictMode>,
)
