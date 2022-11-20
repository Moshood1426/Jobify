import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 4rem;
  text-align: center;
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--primary-grey);
    font-size: 1rem;
    cursor: pointer;
  }
  h4 {
    text-align: center;
    margin-bottom: 0.35rem;
    font-size: 1.25rem;
  }
  p {
    margin-top: 2em;
    opacity: 0.5;
    font-style: italic;
  }
`;

export default Wrapper;
