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
                <legend className="pa0 f5 f4-ns mb3 black-80">Submit the URL of your image</legend>
                    <div className="cf">
                        <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="e.g. https://www.google.com/" type="text" name="url"></input>
                        <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="button" value="Detect!" onClick={handleSubmit}></input>
                    </div>
                </fieldset>
            </div>
        </Fragment>
    )
}

export default ImageLinkInput;