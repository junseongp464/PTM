import React from "react";
import Image from "next/image";
import * as S from "./style";

const LetterFeeling = () => {
  return (
    <S.LetterFeeling>
      <Image
        src="Letter/LetterFeeling.svg"
        height={24}
        width={102}
        alt="LetterFeeling Logo Image"
      />
    </S.LetterFeeling>
  );
};

export default LetterFeeling;
