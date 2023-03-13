import { Route, Routes } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import { Home } from '../home/Home';

export const MainApp = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}
