import { CssBaseline } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CustomisedHead from './Head';
import { FC, ReactNode } from 'react';
import Drawer from './Drawer';
type propsType = {
  children?: JSX.Element | JSX.Element[] | string | string[];
};
//ReactChild include all the above plus number

const Layout: FC<propsType> = ({ children }: propsType) => {
  const router = useRouter();

  return (
    <div>
      <Drawer>{children}</Drawer>
      <CustomisedHead />
      <CssBaseline />
      {/* <ul style={{ position: 'absolute', top: 0, display: 'flex', gap: 30 }}>
        <button style={{ padding: 12 }}>
          <Link href='/Home'>
            <a>Home</a>
          </Link>
        </button>
        <button style={{ padding: 12 }}>
          <Link href='/About'>
            <a>About</a>
          </Link>
        </button>
        <button style={{ padding: 12 }}>
          <Link href='/Contacts'>
            <a>Contacts</a>
          </Link>
        </button>
        <button style={{ padding: 12 }} onClick={() => router.push('/Home')}>
          <a>Home with push</a>
        </button>
      </ul>
      <div style={{ padding: 40, margin: 20 }}>{children}</div> */}
    </div>
  );
};

export default Layout;
