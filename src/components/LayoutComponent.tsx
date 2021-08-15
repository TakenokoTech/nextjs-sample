import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getStaticProps } from '../pages/posts/[id]';
import utilStyles from '../styles/utils.module.css';
import HeaderComponent, { HeaderSize } from './HeaderComponent';
import styles from './LayoutComponent.module.css';

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

export default function LayoutComponent({ children, home }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Learn how to build a personal website using Next.js' />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image priority src='/images/profile.jpg' className={utilStyles.borderCircle} height={144} width={144} alt={name} />
            <HeaderComponent size={HeaderSize.Size2Xl}>{name}</HeaderComponent>
          </>
        ) : (
          <>
            <Link href='/'>
              <a>
                <Image priority src='/images/profile.jpg' className={utilStyles.borderCircle} height={108} width={108} alt={name} />
              </a>
            </Link>
            <HeaderComponent size={HeaderSize.SizeLg}>
              <Link href='/'>
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </HeaderComponent>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
