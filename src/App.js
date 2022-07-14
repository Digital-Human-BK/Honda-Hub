import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthProvider';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Error from './components/Error';
import NotFound from './components/NotFound';

import Catalog from './components/Catalog';
import DetailsByModel from './components/Catalog/DetailsByModel';
import DetailsByGen from './components/Catalog/DetailsByGen';
import DetailsFullSpecs from './components/Catalog/DetailsFullSpecs';

import RequireAuth from './components/RequireAuth';
import Forum from './components/Forum';
import Search from './components/Forum/Search';
import ForumCategory from './components/Forum/ForumCategory';
import ForumPost from './components/Forum/ForumPost';
import ForumNewPost from './components/Forum/ForumNewPost';
import ForumEditPost from './components/Forum/ForumEditPost';

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
          <Route path='/forum/:id' element={<ForumPost />} />
          <Route path='/search' element={<Search />} />
          <Route path='/categories/:category' element={<ForumCategory />} />
          <Route path='/forum/new-post' element={<ForumNewPost />} />
          <Route path='/forum/edit-post/:id' element={<ForumEditPost />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
