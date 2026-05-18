import React from 'react';
import Allfacility from '../Components/Allfacility/Allfacility';


const page = async() => {
      const res = await fetch('http://localhost:5000/facility', { cache: "no-cache" });
    const data = await res.json();

    return <Allfacility data={data} />;
    
};

export default page;