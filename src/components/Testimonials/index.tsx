import * as S from './styled';
import { useReviewUserQuery } from '../../../generated';

const OurReviews = () => {
  const { data } = useReviewUserQuery();

  return (
    <S.Reviews>
      <section className="review">
        <h2>What our customer are saying</h2>

        {data?.Page?.reviews?.map((item) => {
          return (
            <S.Wrapper key={item?.id}>
              <img
                id="images"
                src={item?.user?.avatar?.medium}
                width={120}
                height={120}
                alt="No photo"
              />
              <h4>{item?.user?.name}</h4>
              <p>{item?.summary}</p>
            </S.Wrapper>
          );
        })}
      </section>
    </S.Reviews>
  );
};

export default OurReviews;
