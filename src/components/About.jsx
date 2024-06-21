import aboutImg from '../assets/AboutImg.jpg';
import { EDUCATION } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
      whileInView={{opacity: 1, y:0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
      className="my-10 text-center text-4xl uppercase" >Education</motion.h2>
        
      <div className="flex flex-wrap">

        <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.0}}
        className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className="rounded-2xl w-2/4 h-auto"  src={aboutImg} alt="about image" />
            </div>
            
        </motion.div>
        <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x: 100}}
        transition={{duration: 1.0}}
        className="w-full lg:w-1/2">
                <div className="border-b border-neutral-900 pb-4">
      
      <div>
        {EDUCATION.map((item, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <div className="mb-6 mr-2 text-sm font-semibold text-neutral-300">
                {item.year}
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 text-sm font-semibold">{item.degree}</h6>
              <p className="mb-1 text-sm font-medium text-neutral-400">{item.school}</p>
              <p className="mb-4 text-sm text-neutral-400">{item.description}</p>
              <span className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-100">
                {item.results}
              </span>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
            </motion.div> 
      </div>
    </div>
  )
}

export default About
