import React from "react";
import Image from "next/image";
import * as S from "./style";

const LetterArrive = () => {
  return (
    <S.LetterArrive>
      <Image
        src="Main/LetterArrive.svg"
        height={133}
        width={205}
        alt="LetterArrive Logo Image"
      />
    </S.LetterArrive>
  );
};

export default LetterArrive;
