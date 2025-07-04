import { useState } from 'react';
import api from '../api/api';

function ChangePassword() {
  const [form, setForm] = useState({ oldPassword: '', newPassword: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.oldPassword || !form.newPassword) return setMessage('Both fields required');

    try {
      await api.post('/auth/change-password', form);
      setMessage('Password changed successfully.');
    } catch {
      setMessage('Failed to change password.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Change Password</h2>
      {message && <p>{message}</p>}
      <input
        type="password"
        placeholder="Old Password"
        onChange={e => setForm({ ...form, oldPassword: e.target.value })}
      />
      <input
        type="password"
        placeholder="New Password"
        onChange={e => setForm({ ...form, newPassword: e.target.value })}
      />
      <button type="submit">Change Password</button>
    </form>
  );
}

export default ChangePassword;
