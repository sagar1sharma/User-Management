import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import AddUser from './pages/AddUser';
import Users from './pages/Users';
import GenerateReport from './pages/GenerateReport'

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/addUser' element={<AddUser />} />
          <Route path='/users' element={<Users />} />
          <Route path='/generatereport' element={<GenerateReport />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
