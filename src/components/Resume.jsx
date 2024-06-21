import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.h2 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="my-10 text-center text-4xl uppercase">Resume</motion.h2>

      <div className="iframe-container">
        <iframe
          src="/Dilka%20Sithari.pdf"
          width="100%"
          height="600px"
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",  // Example border radius
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",  // Example box shadow
          }}
          className="resume-iframe"
          title="Dilka Sithari Resume"
        />
      </div>
    </div>
  );
};

export default Resume;
