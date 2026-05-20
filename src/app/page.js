"use client";

import { motion } from "framer-motion";
import Cardfacility from "../Header/Card.jsx/Cardfacility";

const FeaturedFacilities = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
    >
      {data.slice(0, 6).map((item, index) => (
        <motion.div
          key={item._id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
          }}
          viewport={{ once: true }}
          whileHover={{
            y: -8,
            transition: { duration: 0.2 },
          }}
        >
          <Cardfacility data={item} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeaturedFacilities;