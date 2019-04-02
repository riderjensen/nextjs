import React from 'react';
import Link from 'next/link';

export default function index() {
	return (
		<div>
			<h1>The main page</h1>
			<p>Go to <Link href="/auth"><a>Auth</a></Link></p>
		</div>
	)
}
