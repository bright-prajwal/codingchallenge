
// import { useState } from 'react';
// import api from '../api/api';
// import './Register.css';

// function Register() {
//   const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user' });
//   const [message, setMessage] = useState('');

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const { name, email, password } = form;

//     if (!name || !email || !password) return setMessage('All fields are required');
//     if (name.length < 20) return setMessage('Name must be at least 20 characters');
//     if (password.length < 8 || password.length > 16) return setMessage('Password must be 8-16 characters');

//     try {
//       await api.post('/auth/register', form);
//       setMessage('✅ Registered successfully! You can now log in.');
//     } catch (err) {
//       console.error('Registration error:', err.response?.data || err.message);
//       const msg = err.response?.data?.message || 'Registration failed.';
//       setMessage(msg);
//     }

//   };

//   return (
//     <div className="register-container">
//       <form onSubmit={handleSubmit}>
//         <h2>Register</h2>
//         {message && <p style={{ color: message.startsWith('✅') ? 'green' : 'red' }}>{message}</p>}
//         <input
//           placeholder="Full Name (min 20 chars)"
//           onChange={e => setForm({ ...form, name: e.target.value })}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           onChange={e => setForm({ ...form, email: e.target.value })}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           onChange={e => setForm({ ...form, password: e.target.value })}
//         />
//         <select onChange={e => setForm({ ...form, role: e.target.value })}>
//           <option value="user">User</option>
//           <option value="store_owner">Store Owner</option>
//         </select>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );

// }

// export default Register;
import { useState } from 'react';
import api from '../api/api';
import './Register.css'; // Reuse login.css or same styles

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user' });
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const { name, email, password } = form;

    if (!name || !email || !password) return setMessage('All fields are required');
    if (name.length < 20) return setMessage('Name must be at least 20 characters');
    if (password.length < 8 || password.length > 16) return setMessage('Password must be 8-16 characters');

    try {
      await api.post('/auth/register', form);
      setMessage('✅ Registered successfully! You can now log in.');
    } catch (err) {
      console.error('Registration error:', err.response?.data || err.message);
      const msg = err.response?.data?.message || 'Registration failed.';
      setMessage(msg);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box single-column">
        <h2>Register</h2>
        {message && (
          <p className={message.startsWith('✅') ? 'success-text' : 'error-text'}>
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              placeholder="Full Name (min 20 chars)"
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              onChange={e => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              value={form.role}
              onChange={e => setForm({ ...form, role: e.target.value })}
            >
              <option value="user">User</option>
              <option value="store_owner">Store Owner</option>
            </select>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
