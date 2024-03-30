import React, { useState } from 'react';

function Login({ setAuthenticated }) {
  const [password, setPassword] = useState('');
  const correctPassword = "seen"; // Your password

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === correctPassword) {
      setAuthenticated(true);
    } else {
      alert('The password you entered is incorrect.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter the password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;