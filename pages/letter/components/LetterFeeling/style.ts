import { MOBILE_VERSION_MAX_WIDTH } from "styles/GlobalStyle";
import styled, { css } from "styled-components";

export const LetterFeeling = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 12rem;
  width: 100%;
  max-width: ${MOBILE_VERSION_MAX_WIDTH}px;
  z-index: 200;
  height: 5rem;
  min-height: 44px;
  border: 2px solid purple;
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 1rem;
`;
