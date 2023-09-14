import { MOBILE_VERSION_MAX_WIDTH } from "styles/GlobalStyle";
import styled, { css } from "styled-components";

export const LetterSending = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 30rem;
  width: 100%;
  max-width: ${MOBILE_VERSION_MAX_WIDTH}px;
  z-index: 200;
  height: 25rem;
  min-height: 44px;
  border: 2px solid red;
  background-origin: border-box;
  background-clip: content-box, border-box;
  padding: 1rem;
`;
