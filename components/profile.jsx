'use client';
import Image from 'next/image';

export const Profile = ({ person, size = '150' }) => {
  return (
    <Image
      src={'https://i.imgur.com/MK3eW3Am.jpg'}
      alt="Кэтрин Джонсон"
      width={size}
      height={size}
      className="rounded-3xl p-3"
    />
  );
};
