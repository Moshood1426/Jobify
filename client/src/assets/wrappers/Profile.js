import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;
  .buttonDiv {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    place-content: end;
  }

  .submitBtn {
    font-size: 0.95rem;
    padding: 0.5rem 0;
    background-color: var(--primary-grey);
  }

  .updateDiv {
    margin-bottom: 3em;
    margin-top: 3em;
  }

  .alert {
    position: fixed;
    bottom: 0%;
    width: 80%;
    z-index: 3;
    max-width: 500px;
  }

  .mainContainer {
    //position: relative;
  }

  @media (min-width: 1100px) {
    .updateDiv {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
  }
`;

export default Wrapper;
