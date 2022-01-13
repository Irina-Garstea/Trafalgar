import styled from '@emotion/styled';

const StyleFooter = styled.div`
  background: linear-gradient(183.41deg, #67c3f3 -8.57%, #5a98f2 82.96%);
  color: #ffffff;
  font-size: 18px;
  letter-spacing: 1px;
  display: inline-block;
  width: 100%;
  border: hidden;
  padding-left: 500px;
  padding-bottom: 50px;

  .footer ul li:hover {
    box-shadow: 0 0 0 1px #67c3f3;
    font-weight: bold;
  }
  .list-footer:hover {
    box-shadow: 0 0 0 1px #67c3f3;
    cursor: pointer;
  }

  ul li {
    list-style: none;
    font-weight: 300;
  }

  ul li a {
    color: #ffffff;
    font-size: 14px;
    text-decoration: none;
  }

  .footer-links {
    display: flex;
    justify-content: space-between;
    width: 75%;
    padding-left: 75px;
  }

  .list-footer {
    margin-top: -70px;
  }
  h3 {
    letter-spacing: 1px;
  }
  .p-footer {
    position: absolute;
    font-size: 14px;
    width: 300px;
    font-weight: 300;
    margin-top: 140px;
    margin-left: -380px;
  }

  circle {
    fill: #ffffff;
  }
  text {
    fill: #67c3f3;
    font-weight: 500;
    font-size: 25px;
  }
  .logo {
    margin-top: 70px;
    margin-left: -470px;
  }
`;

export default StyleFooter;
