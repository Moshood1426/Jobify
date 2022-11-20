import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #48494a;
  padding: 4vh;
  z-index: 10;

  .content {
    background-color: var(--grey-100);
    padding: 1em;
    height: 100%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cancelIcon {
    align-self: normal;
    font-size: 30px;
  }

  .menuImg {
    height: 40px;
    margin-top: 25px;
    margin-bottom: 30px;
  }

  .menuItems {
    padding: 1em;
  }

  .active {
    color: #252873;
  }

  .sign-out {
  }

  .userInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.5;
    margin-top: auto;
    margin-bottom: 3rem;
  }

  .userPics {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    border: grey 2px solid;
    border-radius: 50%;
    position: relative;
  }

  .userImg {
    border-radius: 50%;
    height: 45px;
    width: 45px;
    object-fit: scale-down;
  }

  .userName {
    font-size: 1.3rem;
    margin-bottom: 0;
    font-weight: bold;
  }

  .userEmail {
    font-size: 0.75rem;
    margin-top: 0;
    opacity: 0.8;
  }

  .userLogout {
    width: fit-content;
    font-size: 0.85rem;
    margin-top: 1em;
    border: none;
    padding: 0.75em 1.5em;
    background-color: var(--primary-deemblue);
    color: white;
    cursor: pointer;
    font-weight: bold;
    border-radius: 10px;
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

export default Wrapper;
