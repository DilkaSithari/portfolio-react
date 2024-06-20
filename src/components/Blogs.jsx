import { BLOGS } from "../constants";
import { motion } from "framer-motion";

const Blogs = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1}}
        className="my-10 text-center text-4xl uppercase"
      >
        Blogs
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {BLOGS.map((blog, index) => (
          <div key={index} className=" p-4 rounded-lg shadow-lg">
            <motion.div 
              whileInView={{opacity: 1, y:0}}
              initial={{opacity: 0, y: -20}}
              transition={{duration: 1}}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="mb-6 rounded w-full h-40 object-cover"
              />
              <a href={blog.link} target="_blank">
              <h6 className="mb-2 font-semibold text-sm">{blog.title}</h6>
              </a>
              <p className="text-gray-600">{blog.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
