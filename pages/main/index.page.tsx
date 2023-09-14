import React from "react";
import LetterArrive from "./components/LetterArrive";
import LetterOpenMain from "./components/LetterOpenMain";
import LetterThanks from "./components/LetterThanks";
import * as S from "./style";

function Main() {
  return (
    <S.Container>
      <LetterArrive />
      <LetterOpenMain />
      <LetterThanks />
    </S.Container>
  );
}

export default Main;
