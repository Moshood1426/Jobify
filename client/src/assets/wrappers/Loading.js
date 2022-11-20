import styled from "styled-components";

const Wrapper = styled.div`
.loader {
  border: 8px solid rgba(37, 40, 115, 0.71); /* Light grey */
  border-top: 8px solid #fff; /* Blue */
  border-radius: 50%;
  width: 90px;
  height: 90px;
  animation: spin 2s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`

export default Wrapper