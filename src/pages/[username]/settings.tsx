import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Layout from '../../components/layout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import { useRouter } from 'next/router';

export default function Post(props: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(useRouter().query);
  const username = props.username;
  return (
    <Layout>
      <Head>
        <title>{username}</title>
      </Head>
      <h1 className={utilStyles.headingXl}>{username}</h1>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      username: context.params.username,
    },
  };
};
