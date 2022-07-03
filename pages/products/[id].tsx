import { Box, Typography } from '@mui/material';
import { productTypes } from '.';

type productPropsType = {
  product: productTypes;
};
function product({ product }: productPropsType) {
  return (
    <Box>
      <Typography>
        <small>{product.name}</small>
        <small>{product.price}</small>
      </Typography>
    </Box>
  );
}

export default product;

export async function getStaticPaths() {
  const server = process.env.JSON_SERVER || '';
  const res = await fetch(server + '/products');
  const products: productTypes[] = await res.json();
  const paths = products.map((product) => {
    return { params: { id: product.id.toString() } };
  });
  //   console.log(paths);
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context: any) {
  const id = context.params.id;
  const server = process.env.JSON_SERVER || '';
  const res = await fetch(server + '/products/' + id);
  const product: productTypes = await res.json();

  return {
    props: {
      product,
    },
    revalidate: 10,
  };
}
