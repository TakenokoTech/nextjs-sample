import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import HeaderComponent, { HeaderSize } from '../../components/HeaderComponent';
import LayoutComponent from '../../components/LayoutComponent';
import GetSettingUsecase, { GetSettingUsecaseReq } from '../../domain/usecase/GetSettingUsecase';
import LoggingRepository from '../../infrastructure/repository/LoggingRepository';
import SettingsRepository from '../../infrastructure/repository/SettingsRepository';

const getSettingUsecase = new GetSettingUsecase(
  new SettingsRepository(), //
  new LoggingRepository(),
);

export default function Post(props: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(useRouter().query);
  const username = props.username;

  // useEffect
  const [text, setText] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const settingDiv1 = isLoading ? 'loading...' : text || isError;
  useEffect(() => {
    getSettingUsecase
      .execute({ username })
      .then((res) => setText(res.logging.text))
      .catch((e) => setError(true))
      .finally(() => setLoading(false));
  });

  // useSWR
  const settingDiv2 = ((res) => {
    console.log('SettingDiv', res.data);
    const error = res.error ? <div>failed to load</div> : null;
    const loading = !res.data ? <div>loading...</div> : null;
    const result = res.data ? <div>{res.data.logging.text}</div> : null;
    return error || loading || result;
  })(
    // usernameがnullの時は発火させたくないので、argに入れる
    useSWR(username, (username) => {
      const request: GetSettingUsecaseReq = { username };
      return getSettingUsecase.execute(request);
    }),
  );

  return (
    <LayoutComponent>
      <Head>
        <title>{username}</title>
      </Head>
      <HeaderComponent size={HeaderSize.SizeXL}>{username}</HeaderComponent>
      {settingDiv1}
      {settingDiv2}
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
