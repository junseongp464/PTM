import React from "react";
import LetterOpen from "./components/LetterOpen";
import LetterContents from "./components/LetterContents";
import LetterSending from "./components/LetterSending";
import LetterFeeling from "./components/LetterFeeling";
import * as S from "./style";

function Letter() {
  return (
    <S.Container>
      <LetterOpen />
      <LetterContents />
      <LetterSending />
      <LetterFeeling />
    </S.Container>
  );
}

export default Letter;
