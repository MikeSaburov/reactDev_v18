'use client';
import Image from 'next/image';
import { getImageUrl } from '@/utils/utils';

export const Profile = ({ person, size = '150' }) => {
  return (
    <Image
      src={getImageUrl(person)}
      alt={person.className}
      width={size}
      height={size}
      className="rounded-3xl p-3"
    />
  );
};
