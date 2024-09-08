import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
