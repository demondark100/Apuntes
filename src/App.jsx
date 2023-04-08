import React from 'react';
import 'normalize.css';

import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// componentes
import Home from './Paginas/Home';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<div>Not found</div>}/>
      </Routes>
    </Router>
  )
}

export default App
