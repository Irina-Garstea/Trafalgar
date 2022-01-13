import styled from '@emotion/styled';

const Head = styled.section`
  background-color: #ffffff;
  margin-left: 75px;

  .info {
    float: left;
    max-width: 300px;

    margin-left: 50px;
  }
  #service-info {
    font-size: 34px;
  }
  #text {
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 300;
  }
  .btn {
    background: #458ff6;
    border-radius: 55px;
    border: hidden;
    color: #ffffff;
    font-weight: 500;
    font-size: 17px;
    height: 56px;
    width: 160px;
    margin-top: 30px;
    cursor: pointer;
  }
  .btn:hover {
    opacity: 0.7;
  }
  .img {
    float: right;
    margin-right: 10%;
  }

  .img-dotted {
    margin-left: -60px;
  }
`;
export default Head;
