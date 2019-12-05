import React from 'react';

const ReturnedImage = ({imageUrl, style}) => {
    return (
        <section className='mw5 mw7-ns center bg-light-gray pa3 ph5-ns'>
                <img 
                    className="center" 
                    id="inputimage" 
                    src={imageUrl} 
                    alt="" 
                    width='500px' 
                    height='auto'
                />
        </section>
    )
}

export default ReturnedImage;