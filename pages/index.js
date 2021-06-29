import Head from 'next/head';
import Link from 'next/link';

import { getAllPosts } from '../lib/data';

export default function Home({ posts }) {
	return (
		<div>
			<Head>
				<title>Özgür Yazar | AnaSayfa</title>
				<meta name='description' content='Özgür Yazar' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='space-y-4'>
				{posts.map((item) => {
					return <BlogListItem key={item.slug} {...item} />;
				})}
			</div>
		</div>
	);
}

function BlogListItem({ slug, title, date, desc }) {
	return (
		<div className='border border-blue-100 shadow rounded-md p-4 hover:shadow-lg hover:border-blue-300 transition duration-200 ease-in'>
			<div>
				<Link href={`/blog/${slug}`}>
					<a className='font-bold'> {title}</a>
				</Link>
			</div>
			<div className='text-gray-600 text-sm'>{date}</div>
			<div>{desc}</div>
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
