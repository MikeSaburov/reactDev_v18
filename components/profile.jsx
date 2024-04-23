'use client';
import Image from 'next/image';

export const Profile = () => {
  return (
    <Image
      src={'https://i.imgur.com/MK3eW3Am.jpg'}
      alt="Кэтрин Джонсон"
      width={150}
      height={150}
    />
  );
};
