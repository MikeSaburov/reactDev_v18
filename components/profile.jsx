'use client';

export const Profile = ({
  name,
  imageId,
  size,
  profession,
  awards,
  discovered,
}) => {
  return (
    <section className="border border-gray-400 rounded-lg p-2">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={imageId}
        alt={name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
};
