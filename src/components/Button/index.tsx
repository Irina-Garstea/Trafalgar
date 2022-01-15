import React, { FC } from 'react';
import { ButtonProps } from './Button';
import * as S from './styled';

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <S.Button {...{ onClick }} type="button">
      {children}
      <span>&#8594;</span>
    </S.Button>
  );
};
