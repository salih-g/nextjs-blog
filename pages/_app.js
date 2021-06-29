import Link from 'next/link';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link href='/'>
							<a> AnaSayfa</a>
						</Link>
					</li>
					<li>
						<Link href='/about'>
							<a>Hakkımda</a>
						</Link>
					</li>
				</ul>
			</nav>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
