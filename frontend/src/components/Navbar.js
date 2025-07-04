import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <nav style={navStyle}>
      <h3>🏬 Store Rating App</h3>
      <div>
        {isLoggedIn ? (
          <>
            {role === 'admin' && <Link style={linkStyle} to="/admin">Admin</Link>}
            {role === 'user' && <Link style={linkStyle} to="/user">User</Link>}
            {role === 'store_owner' && <Link style={linkStyle} to="/store">Store</Link>}
            <Link style={linkStyle} to="/change-password">Change Password</Link>
            <button onClick={handleLogout} style={btnStyle}>Logout</button>
          </>
        ) : (
          <>
            <Link style={linkStyle} to="/login">Login</Link>
            <Link style={linkStyle} to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem',
  background: '#f0f0f0',
  marginBottom: '1rem',
};

const linkStyle = {
  margin: '0 0.5rem',
  textDecoration: 'none',
  color: '#333',
};

const btnStyle = {
  marginLeft: '0.5rem',
  padding: '0.3rem 0.6rem',
};
