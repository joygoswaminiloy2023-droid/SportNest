
import Hero from "./Components/Header/Hero";
import Cardfacility from "./Components/Header/Card.jsx/Cardfacility";
import {motion} from "framer-motion"
import WhyChooseUs from "./Components/Features/WhyChooseUs";
import UpcomingEvents from "./Events/page";


export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/facility`,{cache:"no-cache"});
  const data = await res.json();

  return (
    <>
      <Hero />
      

      <div className="container mx-auto my-10">
        
        <h1 className="text-2xl font-bold text-center lg:text-left ml-10 ">Featured Facilities</h1>
        
  <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
>
  {data?.slice(0, 6).map((item, index) => (
    <motion.div
      key={item._id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <Cardfacility data={item} />
    </motion.div>
  ))}
</motion.div>

      </div>
      <UpcomingEvents></UpcomingEvents>

<WhyChooseUs></WhyChooseUs>
      
    </>
  );
}