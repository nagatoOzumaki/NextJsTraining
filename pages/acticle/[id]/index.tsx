import { useRouter } from 'next/router';
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
type contextType = GetServerSidePropsContext<ParsedUrlQuery, PreviewData>;
const index = ({ post }: { post: postType }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      this is acticle {id}
      <div>
        <p>{post.title}</p>
        <p>{post.body}</p>
        <p>{post.userId}</p>
      </div>
    </div>
  );
};

export default index;
export const getServerSideProps: GetServerSideProps | null = async (
  context: contextType
) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params?.id}`
  );
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
