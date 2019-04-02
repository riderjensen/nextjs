import React from 'react';
import Link from 'next/link';

export default function error() {
	return (
		<div>
			<h1>Oops, we couldnt find your page.</h1>
			<p>Try <Link href="/"><a>going back</a></Link></p>
		</div>
	)
}
