import StyledService from './styled';
import Image from 'next/image';

const OurServices = () => {
  return (
    <StyledService>
      <section className="container-services">
        <div className="services-container">
          <h2 id="services">Our services</h2>
          <div className="rectangle">
            <svg width="400" height="110">
              <rect width="50" height="2" />
            </svg>
          </div>
          <svg
            width="765"
            height="519"
            viewBox="0 0 765 619"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M-154.953 141.268C-93.577 70.7806 27.6289 161.97 203.25 122.061C355.359 87.4787 364.11 -4.37809 485.642 0.176955C574.431 3.48723 671.183 54.755 724.356 144.072C782.997 242.551 761.68 342.81 755.696 367.139C728.983 476.263 649.698 533.826 621.728 553.487C506.488 634.44 377.173 620.254 315.136 613.479C82.0999 587.957 -167.386 421.583 -178.495 240.701C-179.971 217.021 -182.658 173.098 -154.953 141.268Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="429.823"
                y1="-145.173"
                x2="195.583"
                y2="560.635"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#F3F7FF" />
                <stop offset="1" stopColor="#DEEEFE" />
              </linearGradient>
            </defs>
          </svg>
          <p className="content">
            We provide to you the best choiches for you. Adjust it to your health needs and make
            sure your undergo treatment with our highly qualified doctors you can consult with us
            which type of service is suitable for your health
          </p>

          <div className="group">
            <div className="group-services">
              <div className="search-doctor">
                <div className="img-glass">
                  <Image
                    id="image-glass"
                    src={'/Images/image6.png'}
                    width={50}
                    height={50}
                    alt="No photo"
                  />
                </div>
                <h4>Search doctor</h4>
                <p className="medicine">
                  Buy your medicines with our mobile application with a simple delivery system
                </p>
              </div>
            </div>
            <div className="group-services">
              <div className="online-pharmacy">
                <div className="img-bottle">
                  <Image
                    id="image-bottle"
                    src={'/Images/image7.png'}
                    width={50}
                    height={50}
                    alt="No photo"
                  />
                </div>
                <h4>Online pharmacy</h4>
                <p className="medicine">
                  Buy your medicines with our mobile application with a simple delivery system
                </p>
              </div>
            </div>
            <div className="group-services">
              <div className="consultation">
                <div className="img-consultation">
                  <Image
                    id="image-consultation"
                    src="/Images/image8.png"
                    width={50}
                    height={50}
                    alt="No photo"
                  />
                </div>
                <h4>Consultation</h4>
                <p className="medicine">
                  Free consultation with our trusted doctors and get the best recomendations
                </p>
              </div>
            </div>
            <div className="group-services">
              <div className="details-info">
                <div className="img-consultation">
                  <Image
                    id="image-consultation"
                    src="/Images/image9.png"
                    width={50}
                    height={50}
                    alt="No photo"
                  />
                </div>
                <h4>Details info</h4>
                <p className="medicine">
                  Free consultation with our trusted doctors and get the best recomendations
                </p>
              </div>
            </div>
            <div className="group-services">
              <div className="emergecy-care">
                <div className="img-consultation">
                  <Image
                    id="image-consultation"
                    src="/Images/image10.png"
                    width={50}
                    height={50}
                    alt="No photo"
                  />
                </div>
                <h4>Emergecy care</h4>
                <p className="medicine">
                  You can get 24/7 urgent care for yourself or your children and your lovely family
                </p>
              </div>
            </div>
            <div className="group-services">
              <div className="tracking">
                <div className="img-tracking">
                  <Image
                    id="image-tracking"
                    src="/Images/image11.png"
                    width={50}
                    height={50}
                    alt="No photo"
                  />
                </div>
                <h4>Tracking</h4>
                <p className="medicine">
                  Track and save your medical history and health data <br /> <br />{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="btn-btn">
        <button className="btn-btn-btn">Learn More</button>
      </div>
    </StyledService>
  );
};

export default OurServices;
