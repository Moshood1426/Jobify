import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;
  .buttonDiv {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    place-content: end;
  }

  .buttonDiv > button {
    font-size: 0.95rem;
    padding: 0.5rem 0;
  }

  .submitBtn {
    background-color: var(--primary-grey);
  }
  .cancelBtn {
    background-color: var(--grey-500);
  }

  @media (max-width: 650px) {
    .submitBtn {
      margin-bottom: 10px;
    }
  }
`;

export default Wrapper;
