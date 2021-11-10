import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

type TagProps = {
  children: ReactNode;
};

export default function Tag({ children }: TagProps): JSX.Element {
  return <span>{children}</span>;
}

// export default Tag;

// const TagSpan = styled.span`
//   color: var(--buttonText);
//   background: var(--button);
//   padding: 0.25rem 0.5rem;
//   border: 1px solid var(--buttonText);
//   border-radius: 1rem;
//   & + & {
//     margin-left: 0.5rem;
//   }
// `;
