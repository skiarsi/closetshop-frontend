import { useEffect, useState } from 'react';
import { getUser } from './getUser';

export const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then(setUser);
  }, []);

  return user;
};