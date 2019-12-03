import React from 'react';

const ReturnedImage = ({imageUrl}) => {
    return (
        <section className='mw5 mw7-ns center bg-light-gray pa3 ph5-ns'>
            <img className="center" src={imageUrl} alt="" />
        </section>
    )
}

export default ReturnedImage;