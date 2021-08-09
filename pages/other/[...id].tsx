import Layout from '../../components/layout';

export default function Post({ postData }) {
  return <Layout>[...id].tsx</Layout>;
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  console.log(params);
  return {
    props: {},
  };
}
