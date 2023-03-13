import { Route, Routes } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import { Home } from '../home/Home';
import { Register } from '../register/Register';

export const MainApp = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
    </Routes>
    </>
  )
}
