import React from 'react';
import Tag from './Tag';

export default {
  title: 'Component/Tag',
  component: Tag,
};

export const Regular = (): JSX.Element => <Tag>Text</Tag>;
export const Collectible = (): JSX.Element => <Tag>collectible</Tag>;
export const Art = (): JSX.Element => <Tag>Art</Tag>;


// export const Test = (): JSX.Element => <Tag>Test</Tag>;
// export const LongTag = (): JSX.Element => <Tag>A longer tag</Tag>;