import styled from "styled-components";

const Wrapper = styled.div`
  .sign_in {
    display: none;
  }

  .themeToggle {
    display: none;
  }

  .asideContent {
    display: none;
  }

  .menuItems {
    font-size: 1rem;
  }

  .menuItem {
    margin-bottom: 1.5em;
    text-transform: capitalize;
  }

  .menuItemLink {
    text-decoration: none;
    color: var(--grey-400);
    display: flex;
  }

  .menuItemIcon {
    margin-right: 1em;
  }

  .mainTitle {
    margin-bottom: 2em;
  }

  .mainContent {
    width: 100%;
    padding: 2em 1.5em 1em;
  }

  @media (min-width: 900px) {
    display: flex;

    .asideContent {
      display: flex;
    }

    .mainContent {
      padding: 3em 3.75em 1em;
    }

    .mainContent::after {
      content: "";
      background: rgba(37, 40, 115, 0.71);
      border-radius: 50%;
      position: fixed;
      width: 320px;
      height: 320px;
      right: -120px;
      top: -120px;
      z-index: -1;
    }

    nav {
      display: none;
    }
    aside {
      display: block;
    }
  }
`;

export default Wrapper;
