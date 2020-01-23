import React from 'react';

const DemographicText = ({ age, gender, style }) => (
  <header className="tc ph4" style={style}>
    <h1 className="f3 f2-m f1-l fw2 black-90 mv3" id="demogra">
      You are a {gender} and you are approximately {age} years old.
    </h1>
  </header>
);

export default DemographicText;
