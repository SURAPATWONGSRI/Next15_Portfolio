"use client"; // Add this at the top to use client-side features
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Review Movies Web-App",
    description: "เว็บไซต์รีวิวภาพยนต์ เขียนด้วย PHP+MySQL",
    image: "/images/Projects/MovieReview.jpg",
    tag: ["PHP", "Bootstrap", "MySQL"],
  },
  {
    id: 2,
    title: "E-commerce Web-App",
    description: "เว็บไซต์ร้านค้าออนไลน์ E-Commerce",
    image: "/images/Projects/e-commerce.jpg",
    tag: ["Node.js", "Express.js", "Javascript", "mySQL", "Bootstrap"],
  },
  {
    id: 3,
    title: "The Local Weather Web App",
    description:
      "เว็บไซต์ดูอุณหภูมิสภาพอากาศโดยการ fecth API  (openweatherAPI,mapboxAPI)",
    image: "/images/Projects/Weather.png",
    tag: ["Vue.js", "TailwindCSS", "Axios"],
    link: "https://thelocalweather.vercel.app/",
  },
  {
    id: 4,
    title: "Net-Zero เว็บแอพการจัดการพลังงานสุทธิเป็นศูนย์",
    description:
      "เว็บไซต์ที่ช่วยให้สามารถจัดการการใช้พลังงาน เพื่อให้การปล่อยก๊าซเรือนกระจกเป็นศูนย์และใช้พลังงานหมุนเวียนอย่างมีประสิทธิภาพ",
    image: "/images/Projects/netZero.png",
    tag: ["Vue.js", "Strapi.js", "TailwindCSS", "Spring Boot", "PostgreSQL"],
    link: "https://test1netzero.netlify.app/",
  },
];

const MyProjectSection = () => {
  return (
    <>
      <motion.h2
        className="text-center text-white font-semibold text-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
          hidden: {},
        }}
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="flex h-full"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.5 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tag={project.tag}
              link={project.link}
              className="w-full h-full flex flex-col"
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default MyProjectSection;
