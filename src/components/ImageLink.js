import React, { Fragment } from 'react';
import 'antd/dist/antd.css';

import { Input, Button } from 'antd';

const ImageLink = ({ loading }) => {
    const enterLoading = () => {
         // 
    }

    return (
        <Fragment>
            <div> 
                <p>Submit Your Image URL Below</p>
            </div>
            <div>
                <Input
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    onSearch={value => console.log(value)}
                />
                <br />
                <Button 
                    type="primary" 
                    loading={ loading } 
                    onClick={ enterLoading }>
                    Click me!
                </Button>
            </div>
        </Fragment>
    )
}

export default ImageLink;