import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  border-top: 0.25rem solid #252873;
  background-color: var(--white);
  border-radius: 0.35rem;

  .cardContainer {
    padding: 1.5rem 1.25rem;
    padding-bottom: 1.5rem;
  }

  .formTitle {
    margin-bottom: 1.25em;
    font-weight: normal;
    font-size: 1rem;
    opacity: 0.85;
  }

  @media (min-width: 650px) {
    .formItems {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .formItems > * {
      margin-bottom: 0;
    }
  }

  @media (min-width: 1200px) {
    .formItems {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 12px;
    }
  }

  @media(min-width: 300px){
      .cardContainer {
          padding: 2.5rem 2.3rem;
      }
  }
`;

export default Wrapper;