import Head from 'next/head';
import Image from 'next/image';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import { getAllPosts } from '../../lib/data';

import upImage from '../../public/up.png';

export default function BlogPage({ title, date, content }) {
	return (
		<div>
			<Head>
				<title>Özgür Yazar | {title} </title>
				<meta name='description' content='Özgür Yazar' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='mx-auto'>
				<div className='border-b-2 border-blue-100 mb-4'>
					<h2 className='font-bold text-3xl'>{title} </h2>
					<div className='text-gray-600 text-md'>{date}</div>
				</div>
				<div className='prose'>
					<MDXRemote {...content} />
				</div>
			</main>

			<div
				onClick={backToTop}
				className='fixed z-30 bottom-0 right-0 mr-6 mb-6'
			>
				<Image
					src={upImage}
					alt='Picture of the author'
					width={50}
					height={50}
				/>
			</div>
		</div>
	);
}

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
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
