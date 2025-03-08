import React, { Component } from 'react';

class FormWithValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      mobile: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
      city: '',
      hobbies: [],
      errors: {},
    };
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const hobbies = [...this.state.hobbies];
      if (checked) {
        hobbies.push(value);
      } else {
        const index = hobbies.indexOf(value);
        hobbies.splice(index, 1);
      }
      this.setState({ hobbies });
    } else {
      this.setState({ [name]: value });
    }
  };

  validateForm = () => {
    const { name, mobile, email, password, confirmPassword, gender, hobbies } = this.state;
    const errors = {};

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

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      alert('Form submitted successfully');
      this.setState({
        name: '',
        surname: '',
        mobile: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        city: '',
        hobbies: [],
        errors: {},
      });
    }
  };

  render() {
    const { name, surname, mobile, email, password, confirmPassword, gender, city, hobbies, errors } = this.state;

    return (
      <div className="formcontainer">
        <h2 className="heading">Simple Form with Validation</h2>
        <form onSubmit={this.handleSubmit} className="form-container">
          <div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Name"
              className="finput-field"
            />
            <div className="error">{errors.name}</div>
          </div>
          <div>
            <input
              type="text"
              name="surname"
              value={surname}
              onChange={this.handleChange}
              placeholder="Surname"
              className="finput-field"
            />
          </div>
          <div>
            <input
              type="text"
              name="mobile"
              value={mobile}
              onChange={this.handleChange}
              placeholder="Mobile"
              className="finput-field"
            />
            <div className="error">{errors.mobile}</div>
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Email"
              className="finput-field"
            />
            <div className="error">{errors.email}</div>
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Password"
              className="finput-field"
            />
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              placeholder="Confirm Password"
              className="finput-field"
            />
            <div className="error">{errors.password}</div>
          </div>

          <div>
            <p>Gender:</p>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === 'Male'}
                onChange={this.handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === 'Female'}
                onChange={this.handleChange}
              />
              Female
            </label>
            <div className="error">{errors.gender}</div>
          </div>

          <div>
            <p>City:</p>
            <select name="city" value={city} onChange={this.handleChange} className="input-field">
              <option value="">Select City</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Surat">Surat</option>
              <option value="Vadodara">Vadodara</option>
            </select>
          </div>

          <div>
            <p>Hobbies:</p>
            <label>
              <input
                type="checkbox"
                name="hobbies"
                value="Reading"
                checked={hobbies.includes('Reading')}
                onChange={this.handleChange}
              />
              Reading
            </label>
            <label>
              <input
                type="checkbox"
                name="hobbies"
                value="Traveling"
                checked={hobbies.includes('Traveling')}
                onChange={this.handleChange}
              />
              Traveling
            </label>
            <label>
              <input
                type="checkbox"
                name="hobbies"
                value="Sports"
                checked={hobbies.includes('Sports')}
                onChange={this.handleChange}
              />
              Sports
            </label>
            <div className="error">{errors.hobbies}</div>
          </div>

          <button type="submit" className="button start">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FormWithValidation;
