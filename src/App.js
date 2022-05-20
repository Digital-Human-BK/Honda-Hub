import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import Forum from './components/Forum';
import Login from './components/Login';
import Register from './components/Register';
import DetailsByModel from './components/Catalog/DetailsByModel';
import DetailsByGen from './components/Catalog/DetailsByGen';
import DetailsFullSpecs from './components/Catalog/DetailsFullSpecs';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/catalog/:model' element={<DetailsByModel />} />
        <Route path='/catalog/:model/:gen' element={<DetailsByGen />} />
        <Route path='/catalog/:model/:gen/:engine' element={<DetailsFullSpecs />} />
        <Route path='/forum' element={<Forum />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
