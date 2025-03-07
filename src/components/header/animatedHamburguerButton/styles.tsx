import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  svg {
    height: 40px;
    position: absolute;
    width: 40px;
  }
  .plate {
    height: 40px;
  }
  .x {
    transform: scale(0);
    transition: transform 400ms;
  }
  .line {
    fill: none;
    stroke: black;
    stroke-width: 6px;
    stroke-linecap: round;
    stroke-linejoin: round;
    transform-origin: 50%;
    transition: stroke-dasharray 500ms 200ms, stroke-dashoffset 500ms 200ms,
      transform 500ms 200ms;
  }
  .x .line {
    stroke-width: 5.5px;
  }
  .plate1 .line2 {
    stroke-dasharray: 40 200;
    stroke-dashoffset: 0px;
  }
  .plate1 .line3 {
    stroke-dasharray: 40 179;
    stroke-dashoffset: 0px;
  }
  .active .line {
    transition: stroke-dasharray 500ms, stroke-dashoffset 500ms, transform 500ms;
  }
  .active.plate1 .line1 {
    transform: scale(0, 1);
    transition: transform 500ms 100ms;
  }
  .active.plate1 .line2 {
    stroke-dasharray: 5px 200;
    stroke-dashoffset: -164px;
  }
  .active.plate1 .line3 {
    stroke-dasharray: 5px 179;
    stroke-dashoffset: -142px;
  }
  .active .x {
    transform: scale(1);
    transition: transform 400ms 350ms;
  }
`;