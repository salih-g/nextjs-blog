import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Özgür Yazar | AnaSayfa</title>
				<meta name='description' content='Özgür Yazar' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<h1>Özgür Yazar</h1>
			</main>
		</div>
	);
}
