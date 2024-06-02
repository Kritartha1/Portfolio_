import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  const GoToCErtification=()=>{
    window.open('https://learn.microsoft.com/en-us/users/kritarthanath-6017/credentials/78a354a5215246ec?ref=https%3A%2F%2Fwww.linkedin.com%2F')

  }

  const goToUdemy=()=>{
    window.open('http://ude.my/UC-78e5f5f9-13f5-4809-b56b-03b1c25fc374')
  }

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I am a full stack developer 
          <br /> who is in interested in technologies
          <br/>including hardware and software
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Education</motion.b> |
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Courses</motion.b> or Certifications
          </h1>
          {/* <button>WHAT WE DO?</button> */}
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>NIT Rourkela,2023</h2>
          <p><b>Electrical Engineering</b>
            <br/>CGPA: 8.03
          </p>
          

          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p> */}
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Cotton University,<br/>Guwahati,Assam,2018</h2>
          <p><b>Intermediate</b>
          <br/>
          Science
            <br/>79.2%
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Microsoft Certified: Azure Fundamentals</h2>
          <div style={{paddingTop:"2px",paddingBottom:"2px"}}>
          Credential ID: 78A354A5215246EC
          </div>
          <div style={{paddingTop:"2px",paddingBottom:"2px"}}>
          Certification number: BB4F54-089LAE
          </div>
          <div style={{paddingTop:"2px"}}>
          Earned on: February 25, 2024
          </div>
          

          
          
          
         
          <button onClick={()=>GoToCErtification()}>View Certificate</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Build ASP.NET Core Web API 
            <br/>
            - Scratch To Finish (.NET8 API) </h2>
          <p>
            Completed a .NET Core course in Udemy
          </p>
          <button onClick={()=> goToUdemy()}>View Certificate</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
