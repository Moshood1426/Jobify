import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;

  @media (min-width: 650px) {
    .formItems {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 12px;
    }
  }

  .buttonDiv {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    place-content: end;
  }

  .submitBtn {
    font-size: 0.95rem;
    padding: 0.5rem 0;
    background-color: #f8d7da;
    color: var(--red-dark)
  }
`;

export default Wrapper;
