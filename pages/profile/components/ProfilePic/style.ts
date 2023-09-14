import { MOBILE_VERSION_MAX_WIDTH } from "styles/GlobalStyle";
import styled, { css } from "styled-components";

export const ProfilePic = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 14.4rem;
  width: 100%;
  max-width: ${MOBILE_VERSION_MAX_WIDTH}px;
  z-index: 200;
  height: 14.4rem;
  min-height: 44px;
  border: 2px solid red;
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 1rem;
`;
