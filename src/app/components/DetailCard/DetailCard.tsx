import React from 'react';


type DetailCardProps = {
  name: string;
  description: string;
  categories: string[];
};

export default function DetailCard({
  name,
  description,
  categories,
}: DetailCardProps): JSX.Element {
  return (
    <article>
      <button>Back</button>
      <h2>{name}</h2>
      <p>{description}</p>
      <ul>
        {categories.map(category => (
          <li>{category}</li>
        ))}
      </ul>
    </article>
  );
}