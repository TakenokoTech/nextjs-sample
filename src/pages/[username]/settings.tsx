import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage, NextPageContext } from 'next';
import Layout from '../../components/layout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import { useRouter } from 'next/router';
import React from 'react';
import useSWR from 'swr';

const fetcher = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json['']['text'];
};

export default function Post(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const username = props.username;
  const res1 = useSWR('/api/hello', fetcher);
  const res2 = useSWR('/api/hello', fetcher);

  console.log(useRouter().query);
  console.log(res1);
  console.log(res2);

  const error = res1.error || res2.error ? <div>failed to load</div> : null;
  const loading = !res1.data || !res2.data ? <div>loading...</div> : null;

  return (
    <Layout>
      <Head>
        <title>{username}</title>
      </Head>
      <h1 className={utilStyles.headingXl}>{username}</h1>
      {error || loading}
      {res1.data ? <div>{res1.data}</div> : null}
      {res2.data ? <div>{res2.data}</div> : null}
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  console.log('getStaticPaths');
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log('getStaticProps');
  return {
    props: {
      username: context.params.username,
    },
  };
};
