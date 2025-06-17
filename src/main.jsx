import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material'
import theme from './theme.jsx'
import {Provider} from 'react-redux'
import { store } from './app/store.js'
import { BrowserRouter } from 'react-router-dom'
import FooterLayout from './components/layouts/FooterLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> 
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/birthday-wish">
        <FooterLayout>
          <App/>
        </FooterLayout>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
