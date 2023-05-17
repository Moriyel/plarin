import React from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.scss';
import { Home } from './pages/home';
import { Favourites } from './pages/favourites';
import { LeftMenu } from './components/leftMenu';
import { NotFound } from './pages/pageNotFound';


const App = () => (
  <div className="wrapperHome">
    <LeftMenu />  
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/favourites' element={<Favourites />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes> 
  </div>
);

export default App;
