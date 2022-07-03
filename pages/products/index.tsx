import { Box, Typography } from '@mui/material';

export type productTypes = {
  id: number;
  name: string;
  price: number;
};
export type productPropsTypes = { products: productTypes[] };
function index({ products }: productPropsTypes) {
  return (
    <Box>
      {products.map((product) => (
        <Typography key={product.id}>
          <small>{product.name}</small>
          <small>{product.price}</small>
        </Typography>
      ))}
    </Box>
  );
}

export default index;
export async function getStaticProps() {
  const server = process.env.JSON_SERVER || '';
  const res = await fetch(server + '/products');
  const products = await res.json();

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}
