import { Profile } from '@/components/profile';

export const Gallery = () => {
  return (
    <section className="flex gap-2">
      <h1>Список замечательный ученых</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
};
