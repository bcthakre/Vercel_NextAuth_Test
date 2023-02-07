import React from 'react';
import { useSession, signOut } from 'next-auth/react';

const account = () => {
  const { data: session, status } = useSession({ required: true });

  if (status === 'authenticated') {
    return (
      <div>
        <p>Welcome {session.user.name}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not signed In</p>
      </div>
    );
  }
};

export default account;
