import React, { useState } from 'react';

const FormWithValidationUsingHooks = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    city: '',
    hobbies: [],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const hobbies = [...formData.hobbies];
      if (checked) {
        hobbies.push(value);
      } else {
        const index = hobbies.indexOf(value);
        hobbies.splice(index, 1);
      }
      setFormData({ ...formData, hobbies });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const errors = {};
    const { name, mobile, email, password, confirmPassword, gender, hobbies } = formData;

    if (name.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!/^\d{10}$/.test(mobile)) {
      errors.mobile = 'Mobile must be exactly 10 digits';
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = 'Invalid email format';
    }

    if (password !== confirmPassword) {
      errors.password = 'Passwords do not match';
    }

    if (!gender) {
      errors.gender = 'Please select a gender';
    }

    if (hobbies.length === 0) {
      errors.hobbies = 'Please select at least one hobby';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully');
      setFormData({
        name: '',
        surname: '',
        mobile: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        city: '',
        hobbies: [],
      });
    }
  };

  return (
    <div className="formcontainer">
      <h2 className="heading">Simple Form with Validation (Using Hooks)</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="finput-field"
        />
        <div className="error">{errors.name}</div>

        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          placeholder="Surname"
          className="finput-field"
        />

        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Mobile"
          className="finput-field"
        />
        <div className="error">{errors.mobile}</div>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="finput-field"
        />
        <div className="error">{errors.email}</div>

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="finput-field"
        />

        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="finput-field"
        />
        <div className="error">{errors.password}</div>

        <p>Gender:</p>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleChange}
          />
          Female
        </label>
        <div className="error">{errors.gender}</div>

        <p>City:</p>
        <select name="city" value={formData.city} onChange={handleChange} className="input-field">
          <option value="">Select City</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Surat">Surat</option>
          <option value="Vadodara">Vadodara</option>
        </select>

        <p>Hobbies:</p>
        {['Reading', 'Traveling', 'Sports'].map((hobby) => (
          <label key={hobby}>
            <input
              type="checkbox"
              name="hobbies"
              value={hobby}
              checked={formData.hobbies.includes(hobby)}
              onChange={handleChange}
            />
            {hobby}
          </label>
        ))}
        <div className="error">{errors.hobbies}</div>

        <button type="submit" className="button start">Submit</button>
      </form>
    </div>
  );
};

export default FormWithValidationUsingHooks;
