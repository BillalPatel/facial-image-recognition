import React from 'react';

const Navigation = () => {
	return (
		<nav className="db dt-l w-100 border-box pa3 ph5-l">
			<a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
				<img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name" />
			</a>
			<div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
				<a className="link dim white f6 f5-l dib mr3 mr4-l" href="#" title="Press">API Reference</a>
				<a className="link dim white f6 f5-l dib" href="#" title="Contact">Sign Out</a>
			</div>
		</nav>
	)
}

export default Navigation;