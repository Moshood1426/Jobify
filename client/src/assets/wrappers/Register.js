import styled from "styled-components";

const Wrapper = styled.section`
  .container {
    display: grid;
    place-items: center;
    height: calc(100vh - 4.5rem);
  }

  .logIn {
    text-align: center;
    border: red solid 2px;
  }

  nav {
    @media (min-width: 950px) {
      background: var(--white);
      box-shadow: 0px 4px 4px #ffffff;
    }
  }

  .header {
    text-align: center;
    margin-bottom: 1em;
  }

  .header img {
    height: 40px;
    margin: 0 auto;
    margin-bottom: 1em;
  }

  .btn {
    margin-bottom: 0.75em;
  }

  .forgotPassword {
    text-align: center;
    font-size: 0.85rem;
    margin-bottom: 1.5em;
  }

  .forgotPasswordClick {
    color: var(--primary-grey);
    font-weight: bold;
    cursor: pointer;
  }

  .forgotPasswordClick:hover {
    color: red;
  }

  .forgotPassSubtitle {
      font-size: .85rem;
      line-height: 1.5;
      margin-top: 1em;
      margin-bottom: 1em;
  }

  .forgotpassText {
    color: var(--white);
    font-size: .9rem;
    cursor: pointer;
  }

  .forgotpassText:hover {
      color: #F9F027;
  }
`;

export default Wrapper;
