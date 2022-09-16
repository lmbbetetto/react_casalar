import styled from "styled-components";

export const Container = styled.div`

@media (max-width: 720px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      padding: 1rem;
    }

  @media (max-width: 720px) {
    max-width: 100%;
    .sidenav {
      top: 0;
      position: fixed;
      width: 100%;
      height: 100vh;
      background: #000;
      transform: translateX(-110%);
      transition: all 0.5s ease-in-out;
      z-index: 1;
    }

    .activeSidenav {
      top: 0;
      position: fixed;
      width: 100%;
      height: 100vh;
      background: #000;
      transform: translateX(-50%);
      transition: all 0.5s ease-in-out;
      z-index: 1;

      @media (max-width: 300px) { //Galaxy Fold
        transform: translateX(40%);
      }
    }

    .hamburguer {
      background: transparent;
    }

    .logo__casa {
      max-width: 60px;
    }
  }
`