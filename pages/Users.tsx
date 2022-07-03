import Link from 'next/link';
import UserList from '../components/UserList';
export type userType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Object;
  };
};
export type propsType = { users: userType[] };
const Contacts = ({ users }: propsType) => {
  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default Contacts;

export const getStaticProps = async () => {
  const server = process.env.server || '';
  const res = await fetch(server);
  const users: userType[] = await res.json();
  if (!users) {
    return { notFound: true };
  }
  console.log(users);
  return { props: { users } };
};
