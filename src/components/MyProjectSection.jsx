"use client"; // Add this at the top to use client-side features
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import ProjectCard from "./ProjectCard";

const MyProjectSection = () => {
  const locale = useLocale();

  // ใช้ direct translation
  const projectTexts = {
    en: {
      title: "My Projects",
      projects: {
        movieReview: {
          title: "Review Movies Web-App",
          description: "Movie review website written with PHP+MySQL",
        },
        ecommerce: {
          title: "E-commerce Web-App",
          description: "Online store e-commerce website",
        },
        weather: {
          title: "The Local Weather Web App",
          description:
            "Website for viewing temperature and weather conditions by fetching API (openweatherAPI, mapboxAPI)",
        },
        netZero: {
          title: "Net-Zero Energy Management Web App",
          description:
            "Website that helps manage energy usage to achieve zero greenhouse gas emissions and efficiently use renewable energy",
        },
      },
    },
    th: {
      title: "ผลงาน",
      projects: {
        movieReview: {
          title: "Review Movies Web-App",
          description: "เว็บไซต์รีวิวภาพยนต์ เขียนด้วย PHP+MySQL",
        },
        ecommerce: {
          title: "E-commerce Web-App",
          description: "เว็บไซต์ร้านค้าออนไลน์ E-Commerce",
        },
        weather: {
          title: "The Local Weather Web App",
          description:
            "เว็บไซต์ดูอุณหภูมิสภาพอากาศโดยการ fetch API (openweatherAPI, mapboxAPI)",
        },
        netZero: {
          title: "Net-Zero เว็บแอพการจัดการพลังงานสุทธิเป็นศูนย์",
          description:
            "เว็บไซต์ที่ช่วยให้สามารถจัดการการใช้พลังงาน เพื่อให้การปล่อยก๊าซเรือนกระจกเป็นศูนย์และใช้พลังงานหมุนเวียนอย่างมีประสิทธิภาพ",
        },
      },
    },
  };

  const currentTexts = projectTexts[locale] || projectTexts.en;

  const projectsData = [
    {
      id: 1,
      title: currentTexts.projects.movieReview.title,
      description: currentTexts.projects.movieReview.description,
      image: "/images/Projects/MovieReview.jpg",
      tag: ["PHP", "Bootstrap", "MySQL"],
    },
    {
      id: 2,
      title: currentTexts.projects.ecommerce.title,
      description: currentTexts.projects.ecommerce.description,
      image: "/images/Projects/e-commerce.jpg",
      tag: ["Node.js", "Express.js", "Javascript", "mySQL", "Bootstrap"],
    },
    {
      id: 3,
      title: currentTexts.projects.weather.title,
      description: currentTexts.projects.weather.description,
      image: "/images/Projects/Weather.png",
      tag: ["Vue.js", "TailwindCSS", "Axios"],
      link: "https://thelocalweather.vercel.app/",
    },
    {
      id: 4,
      title: currentTexts.projects.netZero.title,
      description: currentTexts.projects.netZero.description,
      image: "/images/Projects/netZero.png",
      tag: ["Vue.js", "Strapi.js", "TailwindCSS", "Spring Boot", "PostgreSQL"],
      link: "https://test1netzero.netlify.app/",
    },
  ];
  return (
    <>
      <motion.h2
        className="text-center text-white font-semibold text-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {currentTexts.title}
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
