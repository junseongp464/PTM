import React from "react";
import Image from "next/image";
import * as S from "./style";

const LetterThanks = () => {
  return (
    <S.LetterThanks>
      <Image
        src="Main/LetterThanks.svg"
        height={76}
        width={330}
        alt="LetterThanks Logo Image"
      />
    </S.LetterThanks>
  );
};

export default LetterThanks;
