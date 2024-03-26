import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Altaawed from './pages/Altaawed'
import Jaras from './pages/Jaras'
import Mazad from './pages/Mazad'
import MazaTaref from './pages/MazaTaraf'
import Header from './components/Header'


export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/mazataref" element={<MazaTaref/>}/>
    <Route path="/mazad" element={<Mazad/>}/>
    <Route path="/jaras" element={<Jaras/>}/>
    <Route path="/altaawed" element={<Altaawed/>}/>

  </Routes>
  </BrowserRouter>;
}
