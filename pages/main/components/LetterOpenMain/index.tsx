import React from "react";
import Image from "next/image";
import * as S from "./style";

const LetterOpenMain = () => {
  return (
    <S.LetterOpenMain>
      <Image
        src="Main/LetterOpenMain.svg"
        height={207}
        width={240}
        alt="LetterOpenMain Logo Image"
      />
    </S.LetterOpenMain>
  );
};

export default LetterOpenMain;
