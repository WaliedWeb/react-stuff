import React from 'react';
import styled from 'styled-components';
import Tag from '../Tag/Tag';

type CardProps = {
  content: {
    title: string;
    description: string;
    categories: string[];
  };
};

function Card({ content }: CardProps): JSX.Element {
  const { title, description, categories } = content;
  return (
    <CardSection>
      <CardTitle>{title}</CardTitle>
      <p>{description}</p>
      <CardList>
        {categories.map((category) => (
          <Tag>{category}</Tag>
        ))}
      </CardList>
    </CardSection>
  );
}

export default Card;

const CardSection = styled.section`
  background: var(--secondary);
  padding: 0.5rem;
  text-align: center;
  color: var(----stroke);
  margin: 1rem;
  border-radius: 0.5rem;
`;

const CardTitle = styled.h1`
  text-transform: uppercase;
  margin: 0.5rem;
`;

const CardList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap: 0.25rem;
`;