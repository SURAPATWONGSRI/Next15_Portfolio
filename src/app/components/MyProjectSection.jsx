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
      <h2 className="text-center text-white font-semibold text-4xl">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tag={project.tag}
            link={project.link}
          />
        ))}
      </div>
    </>
  );
};

export default MyProjectSection;
