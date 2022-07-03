import { FC } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { userType } from '../pages/Users';
import Link from 'next/link';
import Image from 'next/image';
type PropsType = {
  users: userType[];
};
const UserList = ({ users }: PropsType): JSX.Element => {
  return (
    <>
      {' '}
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {users.map((user) => {
          return (
            <ListItem key={user.id} alignItems='flex-start' sx={{ padding: 3 }}>
              <Link href={`/users/${user.id}`}>
                <a style={{ padding: 0 }}>
                  <ListItemAvatar>
                    {/* <Avatar
                      alt='Remy Sharp'
                      src=""
                    /> */}
                    <Image
                      src='/images/avatar.jpeg'
                      alt='profil'
                      width={50}
                      height={50}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={user.email}
                    secondary={
                      <>
                        <Typography
                          sx={{ display: 'inline' }}
                          component='span'
                          variant='body2'
                          color='text.primary'
                        >
                          {user.name + ' ' + user.username}
                        </Typography>
                        {'I live in ' + user.address.city + user.address.street}
                      </>
                    }
                  />
                </a>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
export default UserList;
