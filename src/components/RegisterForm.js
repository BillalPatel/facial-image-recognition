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
                nameChange={this.onNameChange} 
                emailChange={this.onEmailChange} 
                passwordChange={this.onEmailChange}
                clickRegister={this.onSubmitRegistration} 
            />
            // <main className="pa4 black-80">
            //     <div className="measure center">
            //         <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            //             <legend className="f4 fw6 ph0 mh0">Register</legend>
            //             <div className="mt3">
            //                 <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
            //                 <input 
            //                     className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            //                     type="email"
            //                     name="firstname"
            //                     id="firstname"
            //                     onChange={this.onNameChange}
            //                 />
            //             </div>
            //             <div className="mt3">
            //                 <label className="db fw6 lh-copy f6" htmlFor="email-address">Email Address</label>
            //                 <input 
            //                     className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            //                     type="email"
            //                     name="email-address"  
            //                     id="email-address"
            //                     onChange={this.onEmailChange}
            //                 />
            //             </div>
            //             <div className="mv3">
            //                 <div className="mt3">
            //                     <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            //                     <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            //                         type="password"
            //                         name="password"
            //                         id="password"
            //                         onChange={this.onPasswordChange}
            //                     />
            //                 </div>
            //                 <div className="mt3">
            //                     <label className="db fw6 lh-copy f6" htmlFor="password">Confirm Password</label>
            //                     <input 
            //                         className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
            //                         type="password" 
            //                         name="password"
            //                         id="confirm-password"
            //                         onChange={this.onPasswordChange}
            //                     />
            //                 </div>
            //             </div>
            //         </fieldset>
            //         <div>
            //             <input 
            //                 className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            //                 type="submit" 
            //                 value="Register"
            //                 onClick={this.onSubmitRegistration}
            //             />
            //         </div>
            //     </div>
            // </main>
        )
    }
}

export default RegisterForm;