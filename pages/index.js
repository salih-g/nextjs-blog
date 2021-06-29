import Head from 'next/head';
import Link from 'next/link';

import { format, parseISO } from 'date-fns';

import { blogPosts } from '../lib/data';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Özgür Yazar | AnaSayfa</title>
				<meta name='description' content='Özgür Yazar' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='space-y-4'>
				{blogPosts.map((item) => {
					return <BlogListItem key={item.slug} {...item} />;
				})}
			</div>
		</div>
	);
}

function BlogListItem({ slug, title, date, content }) {
	return (
		<div className='border border-blue-100 shadow rounded-md p-4 hover:shadow-lg hover:border-blue-300 transition duration-200 ease-in'>
			<div>
				<Link href={`/blog/${slug}`}>
					<a className='font-bold'> {title}</a>
				</Link>
			</div>
			<div className='text-gray-600 text-sm'>
				{format(parseISO(date), 'MMM do, uuu')}
			</div>
			<div>{content}</div>
		</div>
	);
}
