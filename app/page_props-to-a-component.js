import { getImageUrl } from '@/utils/utils';
import { Profile } from '@/components/profile';
import Child from '@/components/cardChild';

export default function Home() {
  return (
    <main className="p-5 flex flex-col gap-2">
      <h1 className="font-semibold">Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageId={getImageUrl('szV5sdG')}
        size={70}
        profession="physicist and chemist"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal',
        ]}
        discovered="polonium (chemical element)"
      />

      <Profile
        name="Katsuko Saruhashi"
        imageId={getImageUrl('YfeOqp2')}
        size={70}
        profession="geochemist"
        awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
        discovered="a method for measuring carbon dioxide in seawater"
      />

      <Child />
    </main>
  );
}
