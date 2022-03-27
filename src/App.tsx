import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Entrance from './routes/entrance';
import Questions from './routes/questions';
import Result from './routes/result';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div style={{ maxWidth: '500px' }}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Entrance />} />
              <Route path='questions' element={<Questions />} />
              <Route path='result' element={<Result />} />
              <Route
                path='*'
                element={
                  <main>
                    <p>There's nothing here!</p>
                  </main>
                }
              ></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;
