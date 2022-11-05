import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa'


import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <div className='max-w-xl mx-auto'>
                <h1 className='text-3xl py-1 font-bold lg:text-center mt-4'>{postData.title}</h1>
                <p className='text-md py-1 leading-8 text-gray-800 dark:text-gray-500 lg:text-center'><Date dateString={postData.date} /></p>


                <div className=' mx-auto my-5' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                <Link className=' text-teal-500 underline px-4 py-2 rounded-md' href="/" rel="noopener noreferrer"><FaArrowLeft /></Link>
            </div>
        </Layout>
    );
}
