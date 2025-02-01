import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PrivateRoute from './PrivateRoute';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  // const isAuthenticated = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>      </Routes>
    </Router>
  );
}

export default App;
