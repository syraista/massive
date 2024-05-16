import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HomeNLI from './pages/HomeNLI';
import HomeLI from './pages/HomeLI';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeNLI/>} />
        <Route path='/Home' element={<HomeLI/>} />
      </Routes>
    </Router>
  )
}

export default App
