import React from "react";
import Image from "next/image";
import * as S from "./style";

const LetterSending = () => {
  return (
    <S.LetterSending>
      <Image
        src="Letter/LetterSending.svg"
        height={220}
        width={285}
        alt="LetterSending Logo Image"
      />
    </S.LetterSending>
  );
};

export default LetterSending;
