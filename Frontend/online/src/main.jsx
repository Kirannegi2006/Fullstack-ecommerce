import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { UserProvider } from './Context/UserContext';
import App from './App.jsx'
import ShopContextProvider from './Context/ShopContext.jsx';

createRoot(document.getElementById('root')).render(

<>
<UserProvider>
    <ShopContextProvider>
    <App />
    </ShopContextProvider>
   </UserProvider>
   
  </>
)
