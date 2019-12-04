import React, { Fragment } from 'react';

const DemographicText = ({ age, gender }) => {
    return (
        <Fragment>
            <header className="tc ph4" style={{visibility: "hidden"}}>
                <h1 className="f3 f2-m f1-l fw2 black-90 mv3">
                    You are a {gender} and your age is {age}
                </h1>
            </header>
        </Fragment>
    )
}

export default DemographicText;