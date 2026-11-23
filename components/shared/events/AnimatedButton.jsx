"use client";

import { motion } from "motion/react";

export default function AnimatedButton({ children }) {
 

const Whitevariants = {
    hidden: { scaleX: 1 },
    visible:{ scaleX: 0},
};
const Pinkvariants = {
    hidden: { scaleX: 0 },
    visible:{ scaleX: 1},
};

  return (
    
    <motion.div
      className="relative w-45 mx-auto "
      initial= "hidden"
      whileHover= "visible"
  
    >
      {children}
      <motion.span className="absolute bottom-0 left-0 w-full border-t-2 border-white origin-right"
      variants={Whitevariants}
      transition={{ duration: 0.2}}
       />
      
      <motion.span className="absolute top-0 left-0 w-full border-t-2 border-white origin-left"
      variants={Whitevariants}
      transition={{ duration: 0.2}}
       />

        <motion.span className="absolute top-0 left-0 w-full border-t-2 border-pink-500 origin-right"
      variants={Pinkvariants}
      transition={{ duration: 0.3}}
      />

      <motion.span className="absolute bottom-0 left-0 w-full border-t-2 border-pink-500 origin-left"
      variants={Pinkvariants}
      transition={{ duration: 0.3 }}
       />

    </motion.div>
  );
}