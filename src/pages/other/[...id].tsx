import LayoutComponent from '../../components/LayoutComponent';

export default function Post({ postData }) {
  return <LayoutComponent>[...id].tsx</LayoutComponent>;
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
