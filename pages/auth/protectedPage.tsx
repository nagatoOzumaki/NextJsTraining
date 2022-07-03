const ProtectedPage = ({ data }: { data: string }): JSX.Element => {
  return <div>okkkkkkk</div>;
};

export default ProtectedPage;
export const getServerSideProps = async (context: any) => {
  return {
    props: { data: false ? 'Loged In' : 'you are not loged in' },
  };
};
