import styled from "styled-components";

export const Container = styled.div`

    .mobile_mobile {
      display: none;
    }

    .mobile {
      position: fixed;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 87%;
      height: 75px;
    }
    
    .sidenav {
      top: 75px;
      position: fixed;
      width: 90%;
      height: 100vh;
      background: var(--color-white);
      transform: translateX(-110%);
      transition: all 0.5s ease-in-out;
      z-index: 1;
    }

    .activeSidenav {
      top: 75px;
      position: fixed;
      width: 90%;
      height: 100vh;
      background: var(--color-white);
      transform: translateX(-80%);
      transition: all 0.5s ease-in-out;
      z-index: 1;

    .hamburguer {
      background: transparent;
    }

    .hamburguer-container {
      position: fixed;
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 720px) {
    .containerMenu {
      display: none;
    }

    .main_mobile {
      position: fixed;
      width: 100%;
      height: 75px;
      display: flex;

      background-color: var(--color-white);
      box-shadow: 5px 5px 30px rgba(0,0,0,0.5);
    }

    .mobile_mobile {
      width: 90%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;

    }

    .logo__casa {
      max-width: 120px;
    }

      .sidenav {
        position: fixed;
        width: 100%;
        height: 100vh;
        background: #fff;
        transform: translateX(-110%);
        transition: all 0.5s ease-in-out;
        z-index: 1;
      }

      .activeSidenav {
        position: fixed;
        width: 100%;
        height: 100vh;
        background: #fff;
        transform: translateX(-50%);
        transition: all 0.5s ease-in-out;
        z-index: 1;

      .hamburguer {
        background: transparent;
      }

      .mobile_1 {
        padding-left: 5rem;
      }
    }
  }
`;