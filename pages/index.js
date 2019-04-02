import React, { Component } from 'react';
import Link from 'next/link';

export default class index extends Component {
	static async getInitialProps(context) {
		// await for a promise to resolve
		return { appName: 'New app' };
	}

	render() {
		return (
			<div>
				<h1>The main page of {this.props.appName}</h1>
				<p>Go to <Link href="/auth"><a>Auth</a></Link></p>
			</div>
		)
	}
}
