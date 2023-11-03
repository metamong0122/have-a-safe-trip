import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Country from './Country';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country" element={<Country />} />
      </Routes>
    </Router>
  );
}

export default App;
