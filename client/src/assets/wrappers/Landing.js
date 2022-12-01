import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  line-height: 1.45;
  // background: rgba(121, 127, 176, 0.51);

  .intro {
    display: flex;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    padding-top: 15vh;
    padding-bottom: 12vh;
  }

  .menuBar {
    display: none;
  }

  .introTitle {
    margin-bottom: 0.5em;
    color: var(--primary-deemblue);
  }

  .special {
    color: var(--primary-yelow);
    border-bottom: solid 2px var(--primary-grey);
  }

  .introSubTitle {
    margin-bottom: 0.75em;
  }

  .introBtn {
    width: fit-content;
    padding: 0.75em 2em;
    background-color: var(--grey-600);
  }

  .introBtn:hover {
    background-color: var(--primary-grey);
  }

  .introImg {
    display: none;
  }

  .details {
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 1.3em;
    grid-column-gap: 1em;
    max-width: 700px;
    margin-bottom: 1.5em;
    border-top: 1px solid var(--grey-200);
    padding-top: 1.5em;
  }

  .detailMajorItem {
    width: 70%;
    margin: 0 auto;
    padding-bottom: 1em;
    text-align: center;
    grid-column: 1/3;
  }

  .detailMajorItemIcon {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: white solid 2px;
    margin: 0 auto;
    margin-bottom: 0.8em;
    background-color: #93d8f6;
  }

  .detailMajorItemIcon > img {
    border-radius: 50%;
    object-fit: scale-down;
  }

  .detailMajorItemTitle {
    margin-bottom: 0.2em;
  }

  .detailSubItem {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1em;
  }

  .detailSubItemIcon {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: white solid 2px;
    margin-bottom: 0.8em;
    background-color: #93d8f6;
  }

  .detailSubItemIcon > img {
    border-radius: 50%;
    object-fit: scale-down;
  }

  .moreDetail {
    border-top: 1px solid var(--grey-300);
    color: white;
    padding: 2.8em 0;
    text-align: center;
    background: #f0f8f4;
  }

  .moreDetailContainer {
    width: 80%;
    max-width: 850px;
    margin: 0 auto;
  }

  .moreDetailContainer > h3 {
    margin-bottom: 0.6em;
    color: var(--primary-grey);
  }

  .moreDetailContainer > p {
    color: var(--grey-400);
    font-size: var(--small-text);
  }

  .moreDetailContainer > .updateBtn {
    background-color: var(--grey-500);
    color: white;
    width: fit-content;
    margin: 0 auto;
    margin-top: 1.2em;
  }

  .moreDetailContainer > .updateBtn:hover {
    background-color: var(--primary-grey);
    color: white;
  }

  .footer {
    padding: 1em 0.9em;
    background-color: var(--primary-grey);
    color: white;
  }

  .footerTitle {
    text-align: center;
    margin-bottom: 0.75em;
  }

  .footerIconsDiv {
    text-align: center;
    font-size: 1.3rem;
  }

  .footerIconsDivChild {
    margin-right: 0.5em;
  }
  /* 
  .intro::before {
    content: "";
    background-color: #93d8f6;
    width: 250px;
    height: 250px;
    position: absolute;
    z-index: -3;
    transform: matrix(-0.62, -0.83, 0.74, -0.63, 0, 0);
    left: 30%;
    overflow: hidden;
    top: 100px;
    border-radius: 30% 70% 53% 47% / 26% 46% 54% 74%;
  } */

  .updateBtn {
  }

  .border {
    //padding-right: 0.45rem;
    //border-right: solid var(--primary-grey) 1px;
  }

  @media (min-width: 600px) {
    h1 {
      font-size: 2.25rem;
    }

    .details {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 700px) {
    .details p {
      font-size: 0.9rem;
    }
  }

  @media (min-width: 1050px) {
    .details {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      padding-left: 0;
      max-width: 1200px;
    }

    .intro {
      max-width: 1200px;
      padding-top: 12vh;
    }

    .introTitle::after {
      left: 100px;
    }
    .introImg {
      display: block;
    }
    .moreDetail {
      padding: 3.2em 0;
    }
    h1 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.2rem;
    }
    .footer {
      padding: 1.7em 0;
    }
  }

  .introTitle {
    color: var(--primary-grey);
  }
`;

export default Wrapper;
