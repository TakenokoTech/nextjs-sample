import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

export default function Post(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const postData = props.postData;
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(process.env.USER);
  const postData = await getPostData(context.params.id);
  return {
    props: {
      postData,
    },
  };
};
