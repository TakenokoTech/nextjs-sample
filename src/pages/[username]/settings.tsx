import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import React from 'react';
import useSWR from 'swr';
import HeaderComponent, { HeaderSize } from '../../components/HeaderComponent';
import LayoutComponent from '../../components/LayoutComponent';
import GetSettingUsecase from '../../domain/usecase/GetSettingUsecase';
import LoggingRepository from '../../infrastructure/repository/LoggingRepository';
import SettingsRepository from '../../infrastructure/repository/SettingsRepository';
import utilStyles from '../../styles/utils.module.css';

export default function Post(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const getSettingUsecase = new GetSettingUsecase(new SettingsRepository(), new LoggingRepository());
  // console.log(useRouter().query);
  const username = props.username;

  const settingDiv = ((res) => {
    if (res.error) console.error(res.error);
    const error = res.error ? <div>failed to load</div> : null;
    const loading = !res.data ? <div>loading...</div> : null;
    const result = res.data ? <div>{res.data.logging.text}</div> : null;
    return error || loading || result;
  })(useSWR(username, getSettingUsecase.execute));

  return (
    <LayoutComponent>
      <Head>
        <title>{username}</title>
      </Head>
      <HeaderComponent size={HeaderSize.SizeXL}>{username}</HeaderComponent>
      {settingDiv}
    </LayoutComponent>
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
