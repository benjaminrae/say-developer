import { useEffect, useState } from 'react';

export const useInitials = (name: string) => {
  const [initials, setInitials] = useState('');

  useEffect(() => {
    const [firstName, lastName] = name.split(' ');

    if (firstName && lastName) {
      setInitials(`${firstName[0]}${lastName[0]}`);
    }
  }, [name]);

  return initials;
};
