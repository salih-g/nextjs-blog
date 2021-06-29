import Head from 'next/head';
import Link from 'next/link';

import { blogPosts } from '../lib/data';

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

			<div>
				{blogPosts.map((item) => {
					return (
						<div key={item.slug}>
							<div>
								<Link href={`/blog/${item.slug}`}>
									<a> {item.title}</a>
								</Link>
							</div>
							<div>{item.date}</div>
							<div>{item.content}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
