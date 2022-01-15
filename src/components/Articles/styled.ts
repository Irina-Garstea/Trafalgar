import styled from '@emotion/styled';

export const ArticleStyled = styled.div`
  background-color: #ffffff;
  width: 300px;
  margin: 10px 0 0 140px;
  box-shadow: 10px 20px 30px #e6f2ff;
  border-radius: 18px;
  z-index: 3;
  padding-bottom: 20px;
`;

export const ImageWrapper = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width || '100'}px;
  height: ${(props) => props.height || '100'}px;
  overflow: hidden;
  object-fit: contain;
  border-radius: 18px;
`;

export const Desctiption = styled.div<{ $readMore: boolean }>`
  ${(props) =>
    !props.$readMore &&
    `  display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-weight: 300;
    padding-right: 15px;
    `}
`;
