import React from "react";
import Image from "next/image";
import * as S from "./style";

const LetterContents: React.FC = () => {
  return (
    <S.LetterContents>
      <Image
        src="Letter/LetterContents.svg"
        height={133}
        width={228}
        alt="LetterContents Logo Image"
      />
      <p>편지 내용</p>
    </S.LetterContents>
  );
};

export default LetterContents;
