import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../global.css'
import Menu from './components/Menu/Menu'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Comunidade from './pages/Comunidade/Comunidade'
import Contato from './pages/Contato/Contato'
import NotFound from './pages/NotFound'
import Footer from './components/Footer/Footer'

function ApplicationRoutes() {
  return (
      <BrowserRouter>
        <Menu/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="sobre" element={<Sobre/>}/>
          <Route path="comunidade" element={<Comunidade/>}/>
          <Route path="contato" element={<Contato/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default ApplicationRoutes