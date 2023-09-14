/*import React from "react";
import React, { useState } from "react";
import Image from "next/image";
import * as S from "./style";
import LetterContents from "./LetterContents";

const LetterOpen = () => {
  return (
    <S.LetterOpen>
      <Image
        src="Letter/LetterOpen.svg"
        height={40}
        width={42}
        alt="LetterOpen Logo Image"
      />
    </S.LetterOpen>
  );
};

export default LetterOpen;
*/
import React, { useState } from "react";
import LetterContents from "../LetterContents"; // Ensure the correct import path
import Image from "next/image";
import styled from "styled-components";
import * as S from "./style";

const LetterOpenContainer = styled.div`
  /* Add your styling for the LetterOpen container here */
  cursor: pointer; /* Add a pointer cursor to indicate it's clickable */
`;

const LetterOpen: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.LetterOpen onClick={handleOpenClick}>
      <Image
        src="/Letter/LetterOpen.svg" // Provide the correct image path
        height={40}
        width={42}
        alt="LetterOpen Logo Image"
      />
      {isOpen && <LetterContents />}
    </S.LetterOpen>
  );
};

export default LetterOpen;
