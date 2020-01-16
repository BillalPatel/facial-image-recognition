import React, { useState } from 'react';

import ReturnedImage from './ReturnedImage';
import DemographicText from './DemographicText';

const ImageLinkInput = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [showText, setShowText] = useState(false);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [input, setInput] = useState('');

  const handleSubmit = async () => {
    setImageUrl(input);
    await fetch('http://localhost:5000/analyseImage', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input
      })
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.outputs[0].data.regions[0].data.face.gender_appearance.concepts[0].name === 'feminine') {
          setGender('female');
        } else if (response.outputs[0].data.regions[0].data.face.gender_appearance.concepts[0].name === 'masculine') {
          setGender('male');
        }
        setAge(response.outputs[0].data.regions[0].data.face.age_appearance.concepts[0].name);
        setShowText(true);
      })
      .catch((err) => console.log(err));
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const style = showText ? { visibility: 'visible' } : { visibility: 'hidden' };

  return (
    <>
      <DemographicText
        style={style}
        gender={gender}
        age={age}
      />
      <div className="bg-light-red mw7 center pa4 br2-ns ba b--black-10">
        <fieldset className="cf bn ma0 pa0">
          <legend className="pa0 f5 f4-ns mb3 black-80">Submit the URL of your image</legend>
          <div className="cf">
            <input
              className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
              placeholder="e.g. https://www.google.com/"
              type="text"
              name="url"
              onBlur={handleSubmit}
              onChange={onInputChange}
            />
            <input
              className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
              type="button"
              value="Detect!"
              onClick={handleSubmit}
            />
          </div>
        </fieldset>
      </div>
      <ReturnedImage
        style={style}
        imageUrl={imageUrl}
      />
    </>
  );
};

export default ImageLinkInput;
