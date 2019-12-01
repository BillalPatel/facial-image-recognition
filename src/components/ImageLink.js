import React, { Fragment } from 'react';

const ImageLink = () => {
    return (
        <Fragment>
            <div> 
                <p>Submit Your Image URL Below</p>
            </div>
            <div>
                <input type="text"/>
                <button>Detect!</button>
            </div>
        </Fragment>
    )
}

export default ImageLink;