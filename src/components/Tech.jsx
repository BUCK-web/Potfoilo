import React from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { SectionWrapper } from "./Hoc";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { styles } from "../style";


const Tech = () => {
  return (
    <>
      <motion.div
        // className="flex flex-col justify-center items-center p-[30px] text-white"
        variants={fadeIn}
        className="mb-20"
      >
        <p className={styles.sectionSubText}>What I've Learned</p>
        <h2 className={styles.sectionHeadText}>Technology</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech, index) => (
          <div className="w-28 h-28" key={index}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
