import StyledDownload from './styled';
import Image from 'next/image';

const DownloadPage = () => {
  return (
    <StyledDownload>
      <section className="download">
        <div className="download-page">
          <h2>
            Download our mobile apps
            <br />
            providers
          </h2>
          <p id="paragrapth-download">
            Our dedicated patient engagement app and web portal allow you to access information
            instantaneously (no tedeous form, long calls, or administrative hassle) and securely
          </p>
          <div className="img-download">
            <Image
              id="image-download"
              src={'/Images/image3.png'}
              width={522}
              height={447}
              alt="No photo"
            />
          </div>
          <div className="download-btn">
            <button className="download-button">Download &#x2193;</button>
          </div>
        </div>
      </section>
    </StyledDownload>
  );
};
export default DownloadPage;
