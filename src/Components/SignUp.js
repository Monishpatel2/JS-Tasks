import React, { useState, useEffect } from 'react';
import '../SignUp.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('signup');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleSignup = (e) => {
    e.preventDefault();
    const { name, email, password, age, city } = e.target.elements;
    const userData = {
      name: name.value,
      email: email.value,
      password: password.value,
      age: age.value,
      city: city.value,
    };
    localStorage.setItem('user', JSON.stringify(userData));
    setMessage('Signup successful!');
    setMessageType('success');
    setCurrentPage('login');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email.value && storedUser.password === password.value) {
      setUser(storedUser);
      setMessage('Login successful!');
      setMessageType('success');
      setCurrentPage('home');
    } else {
      setMessage('Invalid email or password.');
      setMessageType('error');
    }
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    const { opass, npass, cpass } = e.target.elements;
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser.password === opass.value) {
      if (npass.value === cpass.value) {
        storedUser.password = npass.value;
        localStorage.setItem('user', JSON.stringify(storedUser));
        setMessage('Password changed successfully!');
        setMessageType('success');
        setCurrentPage('home');
      } else {
        setMessage('New passwords do not match.');
        setMessageType('error');
      }
    } else {
      setMessage('Old password is incorrect.');
      setMessageType('error');
    }
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const { name, age, city } = e.target.elements;
    const storedUser = JSON.parse(localStorage.getItem('user'));
    storedUser.name = name.value;
    storedUser.age = age.value;
    storedUser.city = city.value;
    localStorage.setItem('user', JSON.stringify(storedUser));
    setUser(storedUser);
    setMessage('Profile updated successfully!');
    setMessageType('success');
    setCurrentPage('home');
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const { email, newPassword } = e.target.elements;
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser.email === email.value) {
      storedUser.password = newPassword.value;
      localStorage.setItem('user', JSON.stringify(storedUser));
      setMessage('Password reset successful!');
      setMessageType('success');
      setCurrentPage('login');
    } else {
      setMessage('Email not found.');
      setMessageType('error');
    }
  };

  return (
    <div className="container">
      <h1>React Auth System</h1>
      {message && <p className={`message ${messageType}`}>{message}</p>}

      {currentPage === 'signup' && (
        <form onSubmit={handleSignup}>
          <h2>Signup</h2>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <input type="text" name="age" placeholder="Age" required />
          <input type="text" name="city" placeholder="City" required />
          <button type="submit">Signup</button>
          <button type="button" onClick={() => setCurrentPage('login')}>Login</button>
        </form>
      )}

      {currentPage === 'login' && (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <button type="button" onClick={() => setCurrentPage('signup')}>Signup</button>
        </form>
      )}

      {currentPage === 'home' && user && (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <button onClick={() => setCurrentPage('changePassword')}>Change Password</button>
          <button onClick={() => setCurrentPage('updateProfile')}>Update Profile</button>
          <button onClick={() => setCurrentPage('forgotPassword')}>Forgot Password</button>
          <button onClick={() => setCurrentPage('login')}>Logout</button>
        </div>
      )}

      {currentPage === 'changePassword' && (
        <form onSubmit={handleChangePassword}>
          <h2>Change Password</h2>
          <input type="password" name="opass" placeholder="Old Password" required />
          <input type="password" name="npass" placeholder="New Password" required />
          <input type="password" name="cpass" placeholder="Confirm Password" required />
          <button type="submit">Change Password</button>
        </form>
      )}

      {currentPage === 'updateProfile' && user && (
        <form onSubmit={handleUpdateProfile}>
          <h2>Update Profile</h2>
          <input type="text" name="name" defaultValue={user.name} placeholder="Name" required />
          <input type="text" name="age" defaultValue={user.age} placeholder="Age" required />
          <input type="text" name="city" defaultValue={user.city} placeholder="City" required />
          <button type="submit">Update Profile</button>
        </form>
      )}

      {currentPage === 'forgotPassword' && (
        <form onSubmit={handleForgotPassword}>
          <h2>Forgot Password</h2>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="newPassword" placeholder="New Password" required />
          <button type="submit">Reset Password</button>
        </form>
      )}
    </div>
  );
};

export default App;
