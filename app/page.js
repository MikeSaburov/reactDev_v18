import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src={'https://i.imgur.com/MK3eW3Am.jpg'}
        alt="Кэтрин Джонсон"
        width={150}
        height={150}
      />
    </main>
  );
}
