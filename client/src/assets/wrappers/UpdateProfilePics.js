import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  background: var(--white);
  padding: 2rem 1rem;
  border-radius: 10px;
  margin-bottom: 3rem;

  .majContent {
    text-align: left;
  }

  .divTitle {
    margin-bottom: 1.75rem;
  }

  .userImgDiv {
    margin: 0 auto;
    min-width: 50px;
    width: 100px;
    border: grey 2px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 2px;
  }

  .imgInput {
    display: none;
  }

  .imgLabel {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: grey solid 1px;
    padding: 10px;
  }

  .submitImgBtn {
    font-size: 1rem;
    padding: 0.7em 2em;
    background-color: var(--primary-grey);
    border: none;
    border-radius: 7.5px;
    color: var(--white);
    font-weight: bold;
    cursor: pointer;
  }

  .userImg {
    min-width: 45px;
    border-radius: 50%;
  }

  @media (min-width: 500px) {
    padding: 2rem 2rem;
    .submitImgBtn {
        padding: 0.7em 3.5em;
    }
  }

  @media (max-width: 1100px) {
    .formItems {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 12px;
    }
  }

  @media (max-width: 550px) {
    .formItems {
        display: grid;
        grid-template-columns: 1fr;
    }
  }

  
`;

export default Wrapper;
