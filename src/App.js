import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthProvider';
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
import NotFound from './components/NotFound';
import Error from './components/Error';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/catalog/:model' element={<DetailsByModel />} />
        <Route path='/catalog/:model/:gen' element={<DetailsByGen />} />
        <Route path='/catalog/:model/:gen/:engine' element={<DetailsFullSpecs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/error' element={<Error/>}/>
        
        <Route element={<RequireAuth/>}>
          <Route path='/forum' element={<Forum />} />
          <Route path='/forum/new-post' element={<Forum />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
