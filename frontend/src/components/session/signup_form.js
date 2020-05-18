import React from 'react';
import { withRouter } from 'react-router-dom';
import './signup_form.css';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false; 
    this.handleDemo = this.handleDemo.bind(this); 
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.signedIn === true) {
  //     this.props.history.push('/login');
  //   }

  //   this.setState({errors: nextProps.errors})
  // }

  // componentDidUpdate(nextProps) {
  //   // debugger; 
  //   if (nextProps.signedIn === true) {
  //     this.props.history.push('/notes'); 
  //   }

  //   this.setState({errors: nextProps.errors})
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value 
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`} >
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  handleDemo(e) {
    e.preventDefault();

    const demo = { email: 'starlight@gmail.com', password: '123456' }

    this.props.loginDemo(demo); 
    this.props.history.push(`/notes`);
  }


  render() {
    return (
      <div className='signup-wrapper'>
        <div className='signup-outer'>
          <form className='signup-form' onSubmit={this.handleSubmit} >
            <div className='signup-form-inner'>
              <br />
              <input
                className='signup-form-input'
                type='text'
                value={this.state.email}
                onChange={this.update('email')}
                placeholder='Email'
              />
              <br />
              <input
                className='signup-form-input'
                type='text'
                value={this.state.handle}
                onChange={this.update('handle')}
                placeholder='Handle'
              />
              <br />
              <input
                className='signup-form-input'
                type='password'
                value={this.state.password}
                onChange={this.update('password')}
                placeholder='Password'
              />
              <br />
              <input
                className='signup-form-input'
                type='password'
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder='Confirm Password'
              />
              <br />
              <div className='signup-form-buttons'>
                <input className='signup-form-input-button' type='submit' value='Submit' />
                <button onClick={this.handleDemo} className='signup-form-button'>Demo</button>              
              </div>
              {this.renderErrors()}
            </div>
          </form>
        </div>
      </div>
    );
  }
}


export default withRouter(SignupForm); 