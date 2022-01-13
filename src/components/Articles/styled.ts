import styled from '@emotion/styled';

export const ArticleStyled = styled.div`
  padding: 350px 0 0 160px;
`;

export const ImageWrapper = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width || '100'}px;
  height: ${(props) => props.height || '100'}px;
  overflow: hidden;
  object-fit: contain;
`;

export const Desctiption = styled.div<{ $readMore: boolean }>`
  ${(props) =>
    !props.$readMore &&
    `  display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-weight: 300;`}
`;
