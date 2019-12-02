import React, { Fragment } from 'react';

const ImageLinkInput = ({ handleSubmit, loading }) => {
    const enterLoading = () => {
         // 
    }

    return (
        <Fragment>
            <p>Submit Your Image URL Below</p>
            <div className="bg-light-red mw7 center pa4 br2-ns ba b--black-10">
                <fieldset className="cf bn ma0 pa0">
                <legend className="pa0 f5 f4-ns mb3 black-80">Sign up for our newsletter</legend>
                    <div className="cf">
                        <label className="clip" htmlFor="email-address">Submit the URL of your image</label>
                        <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Your Email Address" type="text" name="email-address"></input>
                        <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="button" value="Subscribe" onClick={handleSubmit}></input>
                    </div>
                </fieldset>
            </div>
        </Fragment>
    )
}

export default ImageLinkInput;