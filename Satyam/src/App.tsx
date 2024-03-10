import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './comp/Navbar';
import Portfolio from './comp/portfolio';
function App() {

  return (
    <>
     <Router>
              <Routes>
                <Route path="/" element={<><Navbar /><Portfolio /></>} />
              </Routes>
          </Router>
    </>
  )
}

export default App
