import React from 'react';
import styled from 'styled-components';
import Tag from '../Tag/Tag';

type CardProps = {
  name: string;
  description: string;
  categories?: string[];
};

export default function Card({
  name,
  description,
  categories,
}: CardProps): JSX.Element {
  return (
    <CardBody>
      <CardHeader>{name}</CardHeader>
      <p>{description}</p>
      {categories && categories.map((category) => <Tag key={category}>{category}</Tag>)}
    </CardBody>
  );
}

const CardBody = styled.article`
  padding: 1.5em;
  border: 5px solid #c92a2a;
  border-radius: 0.5em;
`;

const CardHeader = styled.h2`
color: red;
background-color: hotpink;
`;