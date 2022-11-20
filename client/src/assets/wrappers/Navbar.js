import styled from "styled-components";

const Wrapper = styled.nav`
  height: 4.5rem;
  display: grid;
  place-items: center;
  background-color: var(--white);

  .navContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    width: 85%;
    margin: 0 auto;
  }

  /*PAGE LAYOUT */
  .logoImg {
    height: 30px;
    width: 100px;
    margin-right: 1em;
    display: flex;
  }

  .navItems {
    display: flex;

  }

  .menuBar {
    font-size: 1.75rem;
    margin-left: 1em;
    cursor: pointer;
  }

  .sign_in {
    font-size: .8rem;
    border-bottom: solid 2px var(--primary-grey);
    align-self: center;
    padding: .25em;
    cursor: pointer;
    font-weight: bold;
  }

  .register {
    margin-right: 2em;
    font-size: .8rem;
    background-color: var(--primary-grey);
    color: white;
    cursor: pointer;
    padding: .75em 2em;
    border-radius: 5px;
    font-weight: bold;
  }

  .register:hover {
    background-color: rgba(121, 127, 176, 0.51);
    color: var(--primary-grey);
  }

  @media (min-width: 600px) {
    .logoImg {
      height: 40px;
    }

    .sign_in {
      display: block;
    }

    .sign_in:hover {
      color: var(--primary-grey);
      border-bottom: solid 2px black;
    }
  }

  @media(min-width: 800px) {

    .register, .sign_in {
      font-size: 1rem;
    }

    .register {
      padding: .5em 1.5em; 
    }
  }
`;

export default Wrapper;
