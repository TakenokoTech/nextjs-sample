import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import React from 'react';
import DateComponent from '../../components/DateComponent';
import HeaderComponent, { HeaderSize } from '../../components/HeaderComponent';
import LayoutComponent from '../../components/LayoutComponent';
import GetAllPostIdsUsecase from '../../domain/usecase/GetAllPostIdsUsecase';
import GetPostDataUsecase from '../../domain/usecase/GetPostDataUsecase';
import utilStyles from '../../styles/utils.module.css';

export default function Post(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const postData = props.postData;
  return (
    <LayoutComponent>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <HeaderComponent size={HeaderSize.SizeXL}>{postData.title}</HeaderComponent>
      <div className={utilStyles.lightText}>
        <DateComponent dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </LayoutComponent>
  );
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const paths = new GetAllPostIdsUsecase().execute();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(process.env.USER);
  const postData = await new GetPostDataUsecase().execute(context.params.id as string);
  return {
    props: {
      postData,
    },
  };
};
