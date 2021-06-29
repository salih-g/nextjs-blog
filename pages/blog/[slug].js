import Head from 'next/head';
import { blogPosts } from '../../lib/data';

export default function BlogPage({ title, date, content }) {
	return (
		<div>
			<Head>
				<title>Özgür Yazar | {title} </title>
				<meta name='description' content='Özgür Yazar' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<h1>{title} </h1>
				<div>{content} </div>
			</main>
		</div>
	);
}

export async function getStaticProps(context) {
	console.log('hi!', context);
	const { params } = context;

	return {
		props: blogPosts.find((item) => item.slug === params.slug),
	};
}

export async function getStaticPaths() {
	return {
		paths: blogPosts.map((item) => ({
			params: {
				slug: item.slug,
			},
		})),
		fallback: false,
	};
}
