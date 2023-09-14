import React from "react";
import ProfilePic from "./components/ProfilePic";
import * as S from "./style";

const ProfilePage: React.FC = () => {
  const userDogType = "chihuahua";
  const userDogColor = "black";

  return (
    <S.ProfilePageContainer>
      <ProfilePic dogType={userDogType} dogColor={userDogColor} />
    </S.ProfilePageContainer>
  );
};

export default ProfilePage;

//
/* 나중에 아래 코드로 대체 (getUserProfile)을 통해 로그인한 강아지 불러오기
import React, { useEffect, useState } from "react";
import ProfilePic from "./components/ProfilePic";
import * as S from "./style";

const ProfilePage: React.FC = () => {
  const [userProfile, setUserProfile] = useState<any>(null); // State to store user profile data

  useEffect(() => {
    // Simulate fetching user profile data (replace with actual API call)
    const fetchUserProfile = async () => {
      try {
        const response = await getUserProfile(); // Replace with your authentication system's function
        setUserProfile(response.data); // Update the userProfile state with user data
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  if (!userProfile) {
    return <div>Loading...</div>; // Add a loading indicator while fetching data
  }

  const userDogType = userProfile.dogType;
  const userDogColor = userProfile.dogColor;

  return (
    <S.ProfilePageContainer>
      <h1>Your Profile</h1>
      <ProfilePic dogType={userDogType} dogColor={userDogColor} />
      {/* Add other profile content here }
      </S.ProfilePageContainer>
      );
    };
    
    export default ProfilePage;   */
