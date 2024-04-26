function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked ? '✔' : '❌'}
    </li>
  );
}

export default function Home() {
  return (
    <main className="p-5 flex flex-col gap-2">
      <h1>Список вещей Салли Райд</h1>
      <ul>
        <Item isPacked={true} name="Космический скафандр" />
        <Item isPacked={true} name="Шлем с золотым листом" />
        <Item isPacked={false} name="Фотография Тэма" />
      </ul>
    </main>
  );
}
