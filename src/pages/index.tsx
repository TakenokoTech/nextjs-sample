import Head from 'next/head';
import Link from 'next/link';
import DateComponent from '../components/DateComponent';
import HeaderComponent, { HeaderSize } from '../components/HeaderComponent';
import LayoutComponent, { siteTitle } from '../components/LayoutComponent';
import GetSortedPostsDataUsecase, { SortedPostsData } from '../domain/usecase/GetSortedPostsDataUsecase';
import utilStyles from '../styles/utils.module.css';

interface Props {
  allPostsData: SortedPostsData[];
}

export default function Home({ allPostsData }: Props) {
  return (
    <LayoutComponent home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <HeaderComponent size={HeaderSize.SizeLg}>Blog</HeaderComponent>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <DateComponent dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </LayoutComponent>
  );
}

export async function getStaticProps(): Promise<{ props: Props }> {
  return {
    props: {
      allPostsData: new GetSortedPostsDataUsecase().execute(),
    },
  };
}
