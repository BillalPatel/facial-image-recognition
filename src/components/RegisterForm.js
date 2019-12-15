import React from 'react';
import Form from './Form';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }
    
    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }
    
    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitRegistration = () => {
        const { name, email, password } = this.state;
        fetch('http://localhost:5000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })
        .then(res => {
            if (res.status === 200) {
                this.props.setUserName(name);
                this.props.onRouteChange('landing');
            }
        });
    }
    
    render() {
        return ( 
            <Form
                formName={'Register'}
                displayNameField={true}
                nameChange={this.onNameChange} 
                emailChange={this.onEmailChange} 
                passwordChange={this.onPasswordChange}
                confirmPassword={true}
                buttonName={'Register!'}
                clickButton={this.onSubmitRegistration}
                displaySignUpLink={false}
            />
        )
    }
}

export default RegisterForm;