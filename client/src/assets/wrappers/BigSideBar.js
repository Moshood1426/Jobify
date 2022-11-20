import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;
  width: 250px;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--grey-200);
  padding: 3.5em 2em 3em;
  position: sticky;
  top: 0;

  .menuImg {
    height: 30px;
    display: flex;
    justify-content: center;
  }

  .menuItems {
    padding-top: 4em;
  }

  .active {
    color: var(--white);
    background: var(--primary-grey);
    display: flex;
    padding: 0.45em 1em;
    border-radius: 10px;
  }

  .userInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.5;
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

  .uploadImg {
    position: absolute;
    font-size: 1.25rem;
    bottom: 0px;
    left: 35px;
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
`;

export default Wrapper;
