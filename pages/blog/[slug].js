import Head from 'next/head';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import { getAllPosts } from '../../lib/data';

export default function BlogPage({ title, date, content }) {
	return (
		<div>
			<Head>
				<title>Özgür Yazar | {title} </title>
				<meta name='description' content='Özgür Yazar' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<div className='border-b-2 border-blue-100 mb-4'>
					<h2 className='font-bold text-3xl'>{title} </h2>
					<div className='text-gray-600 text-md'>{date}</div>
				</div>
				<div className='prose'>
					<MDXRemote {...content} />
				</div>
			</main>
		</div>
	);
}

export async function getStaticProps(context) {
	const { params } = context;

	const allPosts = getAllPosts();
	const { data, content } = allPosts.find((item) => item.slug === params.slug);
	const mdxSource = await serialize(content);

	return {
		props: {
			...data,
			date: data.date,
			content: mdxSource,
		},
	};
}

export async function getStaticPaths() {
	return {
		paths: getAllPosts().map((post) => ({
			params: {
				slug: post.slug,
			},
		})),
		fallback: false,
	};
}
