import type { ReactNode } from 'react';
import React from 'react';
import styled from 'styled-components';

type TitleProps = {
  children: ReactNode;
};

function Title({ children }: TitleProps): JSX.Element {
  return <StyledTitle>{children}</StyledTitle>;
}

export default Title;

const StyledTitle = styled.h1`
  color: hotpink;
  background: linear-gradient(180deg, #ffbb3b, #ffa90a);
  font-size: 0.8em;
  padding: 0.8em 2em;
  border: none;
  border-radius: 0.4em;
  text-transform: uppercase;
`;