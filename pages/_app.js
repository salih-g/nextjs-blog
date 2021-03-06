import Link from 'next/link';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<div className='mx-auto w-9/12 my-8'>
			<header>
				<h1 className='text-6xl font-bold text-center'>Özgür Yazar</h1>
				<nav className='my-4'>
					<ul className='flex flex-row space-x-4 justify-center'>
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
			</header>

			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
