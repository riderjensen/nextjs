import React from 'react'
import Router from 'next/router';

import User from '../../components/User';

export default function index() {
	return (
		<div>
			<h1>The auth page</h1>
			<User name="Rider" age={23} />
			<button onClick={() => Router.push('/')}>Go to home</button>
		</div>
	)
}
