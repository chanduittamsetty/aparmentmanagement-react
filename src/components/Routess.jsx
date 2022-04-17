import {Routes,Route} from 'react-router-dom';
import { Home } from "./Home"
import { Navbar } from './Navbar';
import { Flat } from './Flat';
import { Login } from './Login';
// import { NotFoundPage } from './NotFoundPage';


export const Routess = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route  path="/flat/:flat_id" element={<Flat/>}></Route>
        <Route  path="/login" element={<Login/>}></Route>
      </Routes>
      

    </>
  );
};
