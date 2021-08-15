import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import DateComponent from '../../components/DateComponent';
import Layout from '../../components/layout';
import GetAllPostIdsUsecase from '../../domain/usecase/GetAllPostIdsUsecase';
import GetPostDataUsecase from '../../domain/usecase/GetPostDataUsecase';
import utilStyles from '../../styles/utils.module.css';

export default function Post(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const postData = props.postData;
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <DateComponent dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
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
