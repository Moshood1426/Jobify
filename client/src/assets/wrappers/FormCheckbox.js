import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: left;
  margin-bottom: 10px;
  gap: 5px;

  .checkboxItem {
    margin-bottom: 0.6em;
  }

  .formLabel {
    margin: 0;
    text-transform: capitalize;
  }
`;
export default Wrapper;
