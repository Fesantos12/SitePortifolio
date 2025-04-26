import { useState } from 'react';

interface UserData {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  location: string;
  followers: number;
  following: number;
  html_url: string;
}

export const useFetchGithubApi = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  const handleFetch = async () => {
    try {
      const response = await fetch('https://api.github.com/users/Fesantos12');
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    userData,
    handleFetch,
  };
};
