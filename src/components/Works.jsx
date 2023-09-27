import React, { useState, useEffect } from 'react';
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";


import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  brand,
  image,
  source_code_link,
}) => {
  return (
    <div >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=" p-5 rounded-2xl sm:w-[360px] w-full product-gradient"
       
      >
        <div className="relative w-full h-[230px]">
          <a  href={source_code_link}>
          <img 
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          </a>
          

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="red-gradient w-11 h-11 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-row">
  {brand.map((brand) => (
    <div key={brand.name} className="flex items-center mr-3">
       <a href={brand.brandLink}><img src={brand.image} alt={brand.name} style={{ width: "35px", height: "35px",borderRadius: "50%",
            overflow:"hidden" }} className="" /></a>
      <p className="mr-2 ms-2">{brand.name}</p>
     
      
    </div>
  ))}
</div>

      </Tilt>
    </div>
  );
};

function Works() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading (replace with your actual data loading code)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Replace with the actual data loading logic
  }, []);

  return (
    <div>
      <div >
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </div>

      <div className="w-full flex">
        <p
         
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These projects showcase my skills and experiences. Each project
          describes my ability to create industrial standard content.
        </p>
      </div>

     
     
        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
  
    </div>
  );
}


export default SectionWrapper(Works, "");
