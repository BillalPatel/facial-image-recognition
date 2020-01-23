import React from 'react';

const ReturnedImage = (props) => {
  const { style, imageUrl } = props;

  return (
    <section className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns" style={style}>
      <img
        className="center"
        id="inputimage"
        src={imageUrl}
        alt="Recognised"
      />
    </section>
  );
};

export default ReturnedImage;
