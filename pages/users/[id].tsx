import React from 'react';
import { userType } from '../Users';

import { useRouter } from 'next/router';
import users from '../../data/users';
const UserDetails = ({ user }: { user: userType }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>...Loading</div>;
  }

  return (
    <div>
      <h3>User Details</h3>
      <div style={{ padding: 12 }}>
        <p>{user.email}</p>
        <p>{user.username}</p>
        <p>{user.address.city}</p>
      </div>
    </div>
  );
};

export default UserDetails;

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // const users: userType[] = await res.json(); //modified

  const paths = users.map((user) => {
    return {
      params: {
        id: user.id.toString(), //without reuturn
      },
    };
  });
  return { paths, fallback: true };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user: userType = await res.json(); //modified
  // if (!user) {
  //   return { notFound: true };
  // }
  return {
    props: { user },
    revalidate: 10,
  };
};
