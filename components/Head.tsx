import Head from 'next/head';

function CustomisedHead() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
    </div>
  );
}

export default CustomisedHead;
