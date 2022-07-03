import {
  GetServerSideProps,
  GetServerSidePropsContext,
  PreviewData,
} from 'next';
import { ParsedUrlQuery } from 'querystring';

type postType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Home = ({ post }: { post: postType }) => {
  return (
    <div>
      <h1>Hello world</h1>
      <div>{post.title}</div>
      <div style={{ backgroundColor: '#ddd', padding: 12 }}>{post.body}</div>
      <div>{post.userId}</div>
    </div>
  );
};

export default Home;
type contextType = GetServerSidePropsContext<ParsedUrlQuery, PreviewData>;
export const getServerSideProps: GetServerSideProps | null = async (
  context: contextType
) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${1}`);
  const post: postType = await res.json();
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: { post },
  };
};
