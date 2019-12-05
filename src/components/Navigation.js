import React from 'react';

const Navigation = () => {
	return (
		<nav className="db dt-l w-100 border-box pa3 ph5-l">
			<img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name" />
			<div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
				<a className="link dim white f6 f5-l dib mr3 mr4-l" href="https://www.clarifai.com/predict" title="Press">API Reference</a>
				<a className="link dim white f6 f5-l dib" href="https://www.clarifai.com/predict" title="Contact">Sign Out</a>
			</div>
		</nav>
	)
}

export default Navigation;