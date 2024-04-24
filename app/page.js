import { Profile } from '@/components/profile';

export default function Home() {
  return (
    <main className="h-full">
      <Profile
        person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
        size={180}
      />
    </main>
  );
}
