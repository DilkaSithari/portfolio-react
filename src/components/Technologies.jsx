import { RiReactjsLine } from "react-icons/ri";
import {
  SiTailwindcss,
  SiVisualstudiocode,
  SiIntellijidea,
  SiCodeblocks,
  SiSublimetext,
  SiTrello,
  SiJira,
  
} from "react-icons/si";
import {
  DiJavascript1,
  DiJava,
  DiPython,
  DiBootstrap,
  DiHtml5,
  DiCss3,
  DiNodejsSmall,
  DiAngularSimple,
  DiMysql,
  DiGit,
} from "react-icons/di";
import { SiC, SiSpringboot, SiFigma } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-20">
      <motion.h2 
      whileInView={{opacity: 1, y:0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
      className="my-10 text-center text-4xl uppercase">Technical Skills</motion.h2>

      <h3 className="my-5 text-center text-2xl">Programming Languages</h3>

      <motion.div 
      whileInView={{opacity: 1, x:0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap  items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiJavascript1 className="text-3xl text-yellow-500" />
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiJava className="text-3xl text-red-500" />
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiPython className="text-3xl text-blue-500" />
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiC className="text-3xl text-blue-700" />
        </motion.div>
      </motion.div>
      <h3 className="my-5 text-center text-2xl">Web Development</h3>

      <motion.div 
      whileInView={{opacity: 1, x:0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiHtml5 className="text-3xl text-orange-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiCss3 className="text-3xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiBootstrap className="text-3xl text-purple-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiAngularSimple className="text-3xl text-red-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-3xl text-teal-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSpringboot className="text-3xl text-green-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiNodejsSmall className="text-3xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(10)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-3xl text-cyan-400" />
        </motion.div>
      </motion.div>

      <h3 className="my-5 text-center text-2xl">Databases</h3>

      <motion.div 
      whileInView={{opacity: 1, x:0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiMysql className="text-3xl text-blue-700" />
        </motion.div>
      </motion.div>

      <h3 className="my-5 text-center text-2xl">Version Control Systems</h3>

      <motion.div 
      whileInView={{opacity: 1, x:0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiGit className="text-3xl text-orange-600" />
        </motion.div>
      </motion.div>
      <h3 className="my-5 text-center text-2xl">IDE</h3>

      <motion.div 
      whileInView={{opacity: 1, x:0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiVisualstudiocode className="text-3xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiIntellijidea className="text-3xl text-purple-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCodeblocks className="text-3xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSublimetext className="text-3xl text-orange-500" />
        </motion.div>
      </motion.div>
      <h3 className="my-5 text-center text-2xl">UI / UX Designing</h3>

      <motion.div 
      whileInView={{opacity: 1, x:0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFigma className="text-3xl text-purple-600" />
        </motion.div>
      </motion.div>

      <h3 className="my-5 text-center text-2xl">Project Management Tools</h3>

      <motion.div 
      whileInView={{opacity: 1, x:0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTrello className="text-3xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJira className="text-3xl text-blue-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
