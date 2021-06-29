import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import upImage from '../public/up.png';

import { getAllPosts } from '../lib/data';

export default function Home({ posts }) {
	return (
		<div>
			<Head>
				<title>Özgür Yazar | AnaSayfa</title>
				<meta name='description' content='Özgür Yazar' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='space-y-4'>
				{posts.map((item) => {
					return <BlogListItem key={item.slug} {...item} />;
				})}
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
			</main>
		</div>
	);
}

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function BlogListItem({ slug, title, date, desc }) {
	return (
		<div className='border border-blue-200 shadow rounded-md p-4 hover:shadow-lg hover:border-blue-300 transition duration-200 ease-in'>
			<h2 className='font-bold text-xl'>{title}</h2>
			<div className='text-gray-600 text-sm'>{date}</div>
			<div>{desc.substr(0, 300)}...</div>
			<Link href={`/blog/${slug}`}>
				<a className='font-bold'> Devamını okumak için tıklayın...</a>
			</Link>
		</div>
	);
}

export async function getStaticProps(context) {
	const allPosts = getAllPosts();

	return {
		props: {
			posts: allPosts.map(({ data, slug }) => {
				return {
					...data,
					date: data.date,
					slug,
					desc: data.desc,
				};
			}),
		},
	};
}
