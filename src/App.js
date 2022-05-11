import { Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import Forum from './components/Forum';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/forum' element={<Forum />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
