import React, { Fragment } from 'react';
import 'antd/dist/antd.css';

import { Input, Button } from 'antd';

const ImageLinkInput = ({ handleSubmit, loading }) => {
    const enterLoading = () => {
         // 
    }

    return (
        <Fragment>
            <p>Submit Your Image URL Below</p>
            <form onSubmit={handleSubmit}>
                <Input
                    placeholder="input search text"
                    size="large"
                    type="text"
                    small="true"
                    allowClear
                    /*onSearch={value => console.log(value)}*/
                />
                <Button 
                    onClick={handleSubmit}>
                    Click me!
                </Button>
            </form>
        </Fragment>
    )
}

export default ImageLinkInput;