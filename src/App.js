import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import AddUser from './pages/addUser';

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/addUser' element={<AddUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
