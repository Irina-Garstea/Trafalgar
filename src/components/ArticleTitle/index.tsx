import ArticleStyled from './styled';
import Image from 'next/image';

const TitleArticle = () => {
  return (
    <ArticleStyled>
      <h2>Check out our latest article</h2>
      <div className="rectangle">
        <svg width="400" height="110">
          <rect width="50" height="2" />
        </svg>
      </div>
      <div className="img-tear">
        <Image id="tear" src={'/Images/Vector3.png'} width={420} height={330} alt="No photo" />
      </div>
    </ArticleStyled>
  );
};

export default TitleArticle;
