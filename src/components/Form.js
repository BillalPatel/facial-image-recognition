import React from 'react';

const Form = (props) => {
  const {
    formName, displayNameField, nameChange, emailChange,
    buttonName, clickButton, passwordChange, confirmPassword,
    onPasswordChange, displaySignUpLink, submitSignUp
  } = props;

  return (
    <main className="pa4 black-80">
      <div className="measure center">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">{formName}</legend>
          { displayNameField
          && (
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="email"
              name="firstname"
              id="firstname"
              onChange={nameChange}
            />
          </div>
          )}
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email Address</label>
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="email"
              name="email-address"
              id="email-address"
              onChange={emailChange}
            />
          </div>
          <div className="mv3">
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                onChange={passwordChange}
              />
            </div>
            { confirmPassword
              && (
                <>
                  <div className="mt3" />
                  <label className="db fw6 lh-copy f6" htmlFor="password">Confirm Password</label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="confirm-password"
                    onChange={onPasswordChange}
                  />
                </>
              )}
          </div>
        </fieldset>
        <div>
          <input
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            id="submit-button"
            type="submit"
            value={buttonName}
            onClick={clickButton}
          />
        </div>
        { displaySignUpLink
         && (
         <div className="lh-copy mt3 hand">
           <p className="f6 link dim black db" id="signup-link" onClick={submitSignUp}>
            Sign up
           </p>
         </div>
         )}
      </div>
    </main>
  );
};

export default Form;
