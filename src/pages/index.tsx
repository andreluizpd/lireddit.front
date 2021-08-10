import { NavBar } from '../components/NavBar';
import { withUrqlClient } from 'next-urql';
import { CreateUrqlClient } from '../utils/CreateUrqlClient';
import { usePostsQuery } from '../generated/graphql';

const Index = () => {
  const [{ data }] = usePostsQuery();

  return (
    <>
      <NavBar />
      <div>Hello World</div>
      <hr />
      {!data ? (
        <div>Loading...</div>
      ) : (
        data.posts.map(p => <div key={p.id}>{p.title}</div>)
      )}
    </>
  );
};

export default withUrqlClient(CreateUrqlClient, { ssr: true })(Index);
