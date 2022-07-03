import useSWR from 'swr';
import { productTypes } from '..';
type FetcherType = () => Promise<productTypes[]>;

const fetcher: FetcherType = async () => {
  const server = process.env.JSON_SERVER || '';
  const url = server + '/products';
  console.log(url);
  const res = await fetch(url);
  const products: productTypes[] = await res.json();
  return products;
};

function Swr() {
  const { data, error } = useSWR('/products', fetcher);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {data.map((product) => (
        <small key={product.id}>{product.name}</small>
      ))}
    </div>
  );
}

export default Swr;
