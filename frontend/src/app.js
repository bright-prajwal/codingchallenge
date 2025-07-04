import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import ChangePassword from './auth/ChangePassword';
import Admin from './dashboards/Admin';
import User from './dashboards/User';
import StoreOwner from './dashboards/StoreOwner';
import PrivateRoute from './components/PrivateRoute';
import Home from './dashboards/Home'; 

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/change-password" element={<PrivateRoute><ChangePassword /></PrivateRoute>} />

        {/* Role-based dashboards */}
        <Route path="/admin" element={<PrivateRoute role="admin"><Admin /></PrivateRoute>} />
        <Route path="/user" element={<PrivateRoute role="user"><User /></PrivateRoute>} />
        <Route path="/store" element={<PrivateRoute role="store_owner"><StoreOwner /></PrivateRoute>} />
      </Routes>
    </Router>
  );
  
  // return (
  //   <Router>
  //     <Navbar /> {/* 👈 add this */}
  //     <Routes>
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/register" element={<Register />} />
  //       <Route path="/change-password" element={<PrivateRoute><ChangePassword /></PrivateRoute>} />
  //       <Route path="/admin" element={<PrivateRoute role="admin"><Admin /></PrivateRoute>} />
  //       <Route path="/user" element={<PrivateRoute role="user"><User /></PrivateRoute>} />
  //       <Route path="/store" element={<PrivateRoute role="store_owner"><StoreOwner /></PrivateRoute>} />
  //     </Routes>
  //   </Router>
  // );
}



export default App;



