
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
//Chrackra
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <ChakraProvider>
    <App />
    </ChakraProvider>

  </BrowserRouter>

)
