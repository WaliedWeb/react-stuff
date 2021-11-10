import React from 'react';
import Card from './Card';

const regular = {
  title: 'Lord of the Rings',
  description: 'A book by J. R. R. Tolkien',
  categories: [],
};

const details = {
  title: 'Lord of the Rings',
  description: 'A book by J. R. R. Tolkien',
  categories: ['Fantasy', 'another universe', 'Middle Earth'],
};

export default {
  title: 'Component/Card',
  component: Card,
};

export const Regular = (): JSX.Element => <Card content={regular}></Card>;
export const detail = (): JSX.Element => <Card content={details}></Card>;