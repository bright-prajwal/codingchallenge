// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../api/api';

// function Login() {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     if (!form.email || !form.password) {
//       return setError('All fields are required');
//     }

//     setLoading(true);
//     setError('');
//     try {
//       const res = await api.post('/auth/login', form);
//       const { token } = res.data;
//       localStorage.setItem('token', token);

//       let role = '';
//       try {
//         const payload = JSON.parse(atob(token.split('.')[1]));
//         role = payload.role;
//         localStorage.setItem('role', role);
//       } catch {
//         setError('Invalid token format');
//         return;
//       }

//       if (role === 'admin') navigate('/admin');
//       else if (role === 'store_owner') navigate('/store');
//       else navigate('/user');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Invalid credentials');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={form.email}
//         onChange={handleChange}
//         aria-label="Email"
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={form.password}
//         onChange={handleChange}
//         aria-label="Password"
//       />
//       <button type="submit" disabled={loading}>
//         {loading ? 'Logging in...' : 'Login'}
//       </button>
//     </form>
//   );
// }

// export default Login;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import './Login.css';
import { Link } from 'react-router-dom';


function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.email || !form.password) {
      return setError('All fields are required');
    }

    setLoading(true);
    setError('');
    try {
      const res = await api.post('/auth/login', form);
      const { token } = res.data;
      localStorage.setItem('token', token);

      const payload = JSON.parse(atob(token.split('.')[1]));
      const role = payload.role;
      localStorage.setItem('role', role);

      if (role === 'admin') navigate('/admin');
      else if (role === 'store_owner') navigate('/store');
      else navigate('/user');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box single-column">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {!form.email && error && (
              <p className="error-text">Email is required.</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {!form.password && error && (
              <p className="error-text">Password is required.</p>
            )}
          </div>
          <div className="form-remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me?</label>
          </div>
          {error && <p className="error-text">{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="form-footer">
          <Link to="/register">
            New User <strong>Signup</strong>
          </Link>
          <a href="#">Forgot your password?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
