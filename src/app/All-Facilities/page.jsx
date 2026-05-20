import React from 'react';
import Allfacility from '../Components/Allfacility/Allfacility';
import { authClient } from '@/lib/auth-client';

const page = async () => {
  const { data: tokenData } = await authClient.token();

  const res = await fetch(`${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/facility`, {
    cache: "no-cache",
    headers: {
      Authorization: `Bearer ${tokenData?.token}`,
    },
  });

  const data = await res.json();

  return <Allfacility data={data} />;
};

export default page;