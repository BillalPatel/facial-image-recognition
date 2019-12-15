import React from 'react';
import Form from './Form';
import axios from 'axios';

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
  
    onEmailChange = (event) => {
      this.setState({signInEmail: event.target.value});
    }

    onPasswordChange = (event) => {
      this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
      const {signInEmail, signInPassword} = this.state;
      fetch('http://localhost:5000/signin', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              email: signInEmail,
              password: signInPassword
          })
      })
      .then(res => res.json())
      .then(user => {
          if (user.id) {
              this.props.onRouteChange('landing');
          }
      });
      this.setName(signInEmail);
    }

    setName = (signInEmail) => {
        axios.get(`http://localhost:5000/profile/${signInEmail}`)
        .then(res => {
            if (res.status === 200) {
                this.props.setUserName(res.data);
            }
        })
    }

    clickSignUp = () => {
        this.props.onRouteChange('signup');
    }
    
    render() {
        return (
            <Form 
                formName={'Sign In'}
                displayNameField={false}
                nameChange={this.onNameChange} 
                emailChange={this.onEmailChange} 
                passwordChange={this.onPasswordChange}
                confirmPassword={false}
                buttonName={'Sign In'}
                clickButton={this.onSubmitSignIn} 
                showSignUpLink={false}
                displaySignUpLink={true}
                submitSignUp={this.clickSignUp}
            />
        )
    }
}

export default SignInForm;