import React from 'react'
import Router from 'next/router';

export default function index() {
	return (
		<div>
			<h1>The auth page</h1>
			<button onClick={() => Router.push('/')}>Go to home</button>
		</div>
	)
}
