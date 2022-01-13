import React, { FC, useState } from 'react';
import { Button } from '../Button';
import Image from 'next/image';
import * as S from './styled';

export type Props = {
  width: string;
  height: string;
  src: string;
  alt: string;
  title: string;
  description: string;
};

export const Articles: React.FC<Props> = ({ width, height, src, alt, title, description }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <S.ArticleStyled>
        <S.ImageWrapper {...{ width, height }}>
          <Image width="100%" height="100%" layout="responsive" {...{ src, alt }} />
        </S.ImageWrapper>
        <h3>{title}</h3>
        <S.Desctiption $readMore={readMore}>{description}</S.Desctiption>
        <Button onClick={() => setReadMore(!readMore)}>
          {readMore ? 'Read Less' : 'Read More'}
        </Button>
      </S.ArticleStyled>
    </>
  );
};
