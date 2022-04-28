import React, { Component } from 'react';
// import { withRouter} from "react-router-dom";
// import { connect } from 'react-redux';
// import { ActionCreators } from '../../actions/profile';
// import { getStore } from '../../utils/index';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import HomeScreen from '../homescreen';
import {Row,Col} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import './style.css';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {
        username: 'Enter User Name!',
        password: 'Enter Password!'
      },
      loginStatus: '',
      submitted: false
    }
  }

  inputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.validationErrorMessage(event);
  }

  validationErrorMessage = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case 'username': 
        errors.username = value.length < 1 ? 'Enter User Name' : '';
        break;
      case 'password': 
        errors.password = value.length < 1 ? 'Enter Password' : '';
        break;
      default:
        break;
    }
    this.setState({ errors });
  }

  validateForm = (errors) => {
    let valid = true;
    console.log(errors)
    Object.entries(errors).forEach(item => {
      console.log(item)
      item && item[1].length > 0 && (valid = false)
    })
    console.log(valid)
    return valid;
  }

  loginForm = async (event) => {
    this.setState({ submitted: true });
    event.preventDefault();
    if (this.validateForm(this.state.errors)) {
      console.info('Valid Form')
      // const user = getStore('ecommerce')
    //   if (user) {
    //     this.props.dispatch(ActionCreators.login(user));
    //     this.props.history.push('/home')
    //   } else {
    //     this.setState({ loginStatus: 'Login Failed! Invalid Username and Password'})
    //   }
    // } else {
    //   console.log('Invalid Form')
    }
  }

  render() {
    const { username, password, errors, submitted, loginStatus } = this.state;
    return (
      <div className="pagecenter loginForm">
        <form>
          
          <div className="Row">
            <div className="Col-sm-3"></div>
            <label htmlFor="username" className="col-sm-2 col-form-label">User Name:</label>
            <div className="Col-sm-3 mb-2">
              <input type="text" value={username} name="username" onChange={(e) => { this.inputChange(e)} } className="form-control" id="username" placeholder="User Name" />
              { submitted && errors.username.length > 0 &&  <span className='error'>{errors.username}</span>}
            </div>
            <div className="Col-sm-4">
            </div>
          </div>
          <div className="Row">
            <div className="Col-sm-3"></div>
            <label htmlFor="password" className="Col-sm-2 Col-form-label">Password:</label>
            <div className="Col-sm-3 mb-2">
              <input type="password" value={password} autoComplete="on" name="password" onChange={(e) => { this.inputChange(e)} } className="form-control" id="password" placeholder="Password" minLength={5} />
              { submitted && errors.password.length > 0 &&  <span className='error'>{errors.password}</span>}
            </div>
            <div className="Col-sm-4"></div>
          </div>
          <LinkContainer to="/">
        <Nav.Link  >
        <div className="Row">
            <div className="Col-sm-12 center mt-2">
              <button type="submit" className="button" >Login</button>
            </div>
          </div>
          </Nav.Link>
        {/* <i class="fas fa-sign-in-alt"></i> &nbsp; SignIn</Nav.Link> */}
        </LinkContainer>


        <LinkContainer to="/Forget">
        <Nav.Link  >
        <div className="Row">
            <div className="Col " >
              <button type="forget" className="button" >Forgot Password?</button>
            </div>
          </div>
          </Nav.Link>
        {/* <i class="fas fa-sign-in-alt"></i> &nbsp; SignIn</Nav.Link> */}
        </LinkContainer>
        
          {/* <LinkContainer to="/Homescreen">
          <div className="Row">
            <div className="Col-sm-12 center mt-2">
              <button type="submit" className="button" onClick={this.loginForm} >Login</button>
            </div>
          </div>
          </LinkContainer> */}
          <LinkContainer to="/signup">
          
        <Nav.Link  >
          <div className="Row">
            <div className="Col">
            <button type="signup" className="button" >Register</button></div>
            <div className="Col-sm-4 right">
              {/* <a href="/Login/Register">Register</a> */}
            </div>
           
          </div>
          </Nav.Link>
          </LinkContainer>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile
  }
}

// export default connect(mapStateToProps)(withRouter(Login));
export default Login