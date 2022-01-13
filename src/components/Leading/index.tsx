import StyledLeading from './styled';
import Image from 'next/image';

const LeadingPage = () => {
  return (
    <StyledLeading>
      <section className="leading">
        <div className="img-leading">
          <Image
            id="image-leading"
            src={'/Images/image2.png'}
            width={522}
            height={447}
            alt="No photo"
          />
        </div>
        <div className="leading-page">
          <h2>
            Leading healthcare
            <br />
            providers
          </h2>
          <p className="paragrapth-leading">
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and
            online for everyone. To us, it’s not just work. We take pride in the solutions we
            deliver
          </p>
          <br />
          <div className="button-btn">
            <button className="button-btn-btn">Learn More</button>
          </div>
        </div>
      </section>
    </StyledLeading>
  );
};
export default LeadingPage;
