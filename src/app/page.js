import Image from "next/image";
import Hero from "./Components/Header/Hero";
import Cardfacility from "./Components/Header/Card.jsx/Cardfacility";

export default async function Home() {
  const res = await fetch('http://localhost:5000/facility',{cache:"no-cache"});
  const data = await res.json();

  return (
    <>
      <Hero />
      

      <div className="continer mx-auto my-10">
        
        <h1 className="text-2xl font-bold">Featured Facilities</h1>
        
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
       
      {data.slice(0, 3).map((item) => (
          <Cardfacility key={item._id} data={item} />
        ))}
      </div>
      </div>
    </>
  );
}