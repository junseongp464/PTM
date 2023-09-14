import React from "react";
import Image from "next/image";
import * as S from "./style";

interface ProfilePicProps {
  dogType: string;
  dogColor: string;
}

const ProfilePic: React.FC<ProfilePicProps> = ({ dogType, dogColor }) => {
  // Logic to determine and render the appropriate dog image based on type and color
  const imagesrc = `Profile/${dogType}_${dogColor}.svg`;

  return (
    <S.ProfilePic>
      <Image
        src="Profile/Chihuahua_black.svg"
        //지금은 예시 중 하나인 검정 치와와인데 나중에 {imageSrc}로 바꿔줄 것
        height={156}
        width={156}
        alt={`${dogColor} ${dogType}`}
      />
    </S.ProfilePic>
  );
};

export default ProfilePic;
