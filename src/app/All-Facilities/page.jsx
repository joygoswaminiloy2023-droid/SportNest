import React from 'react';
import Allfacility from '../Components/Allfacility/Allfacility';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const page = async () => {
 const  {token}=await auth.api.getToken({
     headers:await headers()
 })

  const res = await fetch(`${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/facility`, {
    cache: "no-cache",
    headers: {
     authorization: `Bearer ${token}`
    },
  });

  const data = await res.json();

  return <Allfacility data={data} />;
};

export default page;