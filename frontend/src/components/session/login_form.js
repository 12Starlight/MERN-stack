import React from 'react';
import { withRouter } from 'react-router-dom';
import './login.css'; 


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loggedIn: false,
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this); 
  }

  // Once the user has been authenticated, redirect to the Notes page
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.currentUser === true) {
  //     this.props.history.push('/notes');
  //   }

  //   // Set or clear errors
  //   this.setState({errors: nextProps.errors})
  // }

  // componentDidUpdate(prevProps, nextProps) {
  //   debugger; 
  //   if (this.props.signedIn === true) {
  //     this.props.history.push('/notes');
  //   }

  //   this.setState({ errors: nextProps.errors })
  // }

  componentDidUpdate(prevProps, prevState) {
    // debugger; 
    if (this.props.signedIn === true) {
      this.props.fetchNotes(); 
      this.props.history.push('/notes');
    }
  }

  componentDidMount() {
    if (this.props.signedIn === true) {
      this.setState({ loggedIn: true });
      this.props.history.push('/notes');
    }
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value 
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  // Render the session errors, if there are any
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


  render() {
    return (
      <div className='login-wrapper'>
        <div className='login-outer'>
          <form className='login-form' onSubmit={this.handleSubmit} >
            <div className='login-form-inner'>
              <input
                className='login-form-input'
                type='text'
                value={this.state.email}
                onChange={this.update('email')}
                placeholder='Email'
              />
              <br />
              <input
                className='login-form-input'
                type='password'
                value={this.state.password}
                onChange={this.update('password')}
                placeholder='Password'
              />
              <br />
              <input className='login-form-button' type='submit' value='Submit' />
              {this.renderErrors()}
            </div>
          </form>       
        </div>
      </div>
    );
  }
}


export default withRouter(LoginForm); 