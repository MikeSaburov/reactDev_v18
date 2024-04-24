import { Profile } from '@/components/profile';

export default function Home() {
  return (
    <main className="h-full">
      <Profile
        person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }}
        size={150}
      />

      <Profile
        person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh' }}
        size={100}
      />

      <Profile person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} size={80} />
    </main>
  );
}
