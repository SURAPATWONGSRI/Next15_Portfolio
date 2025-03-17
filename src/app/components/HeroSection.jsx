"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className=" text-white mb-2 sm:mb-4 text-6xl sm:text-6xl lg:text-6xl font-extrabold">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"
            >
              สวัสดีครับ, ผม{" "}
            </motion.span>
            <br></br>
            <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl inline-block">
              <TypeAnimation
                sequence={[
                  "สุรพัศ วงศรี",
                  1000,
                  "Web Developer",
                  1000,
                  "Frontend Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  display: "inline-block",
                }}
                repeat={Infinity}
              />
            </div>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#ADB7BE] sm:text-md lg:text-md mb-4 sm:mb-6 max-w-xl mx-auto sm:mx-0 leading-relaxed"
          >
            81/313 หมู่บ้านพฤกษา116 รังสิต-นครนายก ตำบลคลองหลวง อำเภอคลองหลวง
            ปทุมธานี 12120 , ประเทศไทย
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r  from-emerald-400 to-cyan-400 hover:scale-110  transition-all hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800     rounded-full px-3 sm:px-5 py-1 sm:py-2">
                Download CV
              </span>
            </button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="col-span-5 place-self-center mt-6 sm:mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="https://portfolio-peach-mu-55.vercel.app/assets/picHero-BXCCglct.jpg"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              alt="Hero image of Suraphat Wongsri"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
