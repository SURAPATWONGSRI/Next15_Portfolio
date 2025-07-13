"use client";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState, useTransition } from "react";
import TabButton from "../components/TabButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { Separator } from "./ui/separator";

const translations = {
  en: {
    aboutMe: "About Me",
    description: `I'm currently working as a Software Engineer at OneCharge Solution Co., Ltd., a tech startup building the OneCharge platform, a centralized system for EV drivers, charging station operators, and property owners. The platform is based on OCPP and designed to be user-friendly,`,
    skills: "Skills",
    education: "Education",
    experience: "Experience",
    responsibilities: "Responsibilities: ",
    edu1: {
      degree: "Vocational Certificate (Information Technology)",
      school: "Thai-Austrian Technical College | May 5, 2018 - March 15, 2021",
      major: "Information and Communication Technology",
      gpa: "GPA 2.31",
    },
    edu2: {
      degree:
        "Bachelor of Science (Information Technology and Digital Communication)",
      school:
        "Rajamangala University of Technology Thanyaburi | July 5, 2021 - March 31, 2025",
      major: "Faculty of Science and Technology",
      gpa: "GPA 2.39",
    },
    exp1: {
      title: "IT-Support (Intern)",
      company: "Thai-Austrian Technical College | Jul 2020 - October 2020",
      resp: "Responsible for managing, troubleshooting, repairing, and maintaining computer equipment, including software and hardware of the organization to ensure they are in good condition and ready for use at all times.",
    },
    exp2: {
      title: "Developer (Intern)",
      company: "Betask Consulting Co., Ltd. | Jul 2024 - October 2024",
      resp: "Worked on developing web applications for both Client-side and Server-side.",
    },
    exp3: {
      title: "Software Engineer (Hybrid)",
      company: "OneCharge Solution Co., Ltd. | June 2025 - Present",
      resp: "Worked on developing web applications for both Client-side and Server-side.",
    },
  },
  th: {
    aboutMe: "เกี่ยวกับฉัน",
    description: `ปัจจุบันทำงานในตำแหน่ง Software Engineer ที่บริษัท วันชาร์จ โซลูชั่น จำกัด ซึ่งเป็น Tech Startup ด้าน EV ที่พัฒนา OneCharge — แพลตฟอร์มจัดการ สถานีชาร์จรถยนต์ไฟฟ้า ค้นหาสถานีชาร์จได้ โดยระบบรองรับมาตรฐาน OCPP ใช้งานง่าย และสามารถเชื่อมต่อกับอุปกรณ์หลากหลายยี่ห้อ `,
    skills: "ทักษะ",
    education: "การศึกษา",
    experience: "ประสบการณ์",
    responsibilities: "หน้าที่รับผิดชอบ: ",
    edu1: {
      degree: "ประกาศนียบัตรวิชาชีพ (เทคโนโลยีสารสนเทศ)",
      school: "วิทยาลัยเทคนิคสัตหีบ | 5 พ.ค. 2018 - 15 มี.ค. 2021",
      major: "เทคโนโลยีสารสนเทศและการสื่อสาร",
      gpa: "เกรดเฉลี่ย 2.31",
    },
    edu2: {
      degree: "วิทยาศาสตรบัณฑิต (เทคโนโลยีสารสนเทศและการสื่อสารดิจิทัล)",
      school:
        "มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี | 5 ก.ค. 2021 - 31 มี.ค. 2025",
      major: "คณะวิทยาศาสตร์และเทคโนโลยี",
      gpa: "เกรดเฉลี่ย 2.39",
    },
    exp1: {
      title: "IT-Support (ฝึกงาน)",
      company: "วิทยาลัยเทคนิคสัตหีบ | ก.ค. 2020 - ต.ค. 2020",
      resp: "ดูแล แก้ไข ซ่อมแซม และบำรุงรักษาอุปกรณ์คอมพิวเตอร์ทั้งซอฟต์แวร์และฮาร์ดแวร์ขององค์กรให้พร้อมใช้งานอยู่เสมอ",
    },
    exp2: {
      title: "Developer (ฝึกงาน)",
      company: "บริษัท บีทาสก์ คอนซัลติ้ง จำกัด | ก.ค. 2024 - ต.ค. 2024",
      resp: "พัฒนาเว็บแอปพลิเคชันทั้งฝั่ง Client-side และ Server-side",
    },
    exp3: {
      title: "Software Engineer (Full-Time)",
      company: "บริษัท วันชาร์จ โซลูชั่น จำกัด | มิ.ย. 2025 - ปัจจุบัน",
      resp: "พัฒนาแอปพลิเคชันในฝั่ง Web Application ทั้งฝั่ง Front End และ Back End",
    },
  },
};

const skillsData = [
  {
    name: "HTML",
    icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
  },
  {
    name: "Tailwind",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
  },
  {
    name: "Shadcn",
    icon: "https://archive.org/download/github.com-shadcn-ui-ui_-_2023-08-09_16-03-10/cover.jpg",
  },
  {
    name: "Javascript",
    icon: "https://www.svgrepo.com/show/303206/javascript-logo.svg",
  },
  {
    name: "Typescript",
    icon: "https://www.svgrepo.com/show/354478/typescript-icon.svg",
  },
  {
    name: "React",
    icon: "https://logos-world.net/wp-content/uploads/2023/08/React-Logo.png",
  },
  {
    name: "Python",
    icon: "https://www.cdnlogo.com/logos/p/3/python.svg",
  },
  { name: "PHP", icon: "https://www.svgrepo.com/show/452088/php.svg" },
  {
    name: "Node.js",
    icon: "https://cdn.clever-cloud.com/uploads/2023/08/nodejs.svg",
  },
  {
    name: "Next.js",
    icon: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
  },
  {
    name: "Vue.js",
    icon: "https://brandlogos.net/wp-content/uploads/2022/01/vue.js-logo-brandlogo.net_-512x512.png",
  },
  {
    name: "MySQL",
    icon: "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png",
  },
  {
    name: "Git",
    icon: "https://www.svgrepo.com/show/303548/git-icon-logo.svg",
  },
  {
    name: "Docker",
    icon: "https://www.svgrepo.com/show/331370/docker.svg",
  },
];

const SkillsCarousel = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      const maxScrollLeft = scrollWidth - clientWidth;

      if (scrollLeft >= maxScrollLeft / 2) {
        // Reset to beginning when reached halfway (since we duplicated items)
        scrollContainer.scrollLeft = 0;
      } else {
        // Scroll to next item
        scrollContainer.scrollLeft += 1;
      }
    }, 30); // Smooth continuous scroll

    return () => clearInterval(interval);
  }, []);

  // Duplicate skills data for infinite scroll effect
  const duplicatedSkills = [...skillsData, ...skillsData];

  return (
    <div className="w-full">
      <div
        ref={scrollRef}
        className="flex gap-2 sm:gap-3 lg:gap-4 overflow-x-hidden pb-2 sm:pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex-shrink-0 flex flex-col items-center p-2 sm:p-3 lg:p-4 bg-zinc-800/50 rounded-lg border border-zinc-700 hover:border-zinc-600 transition-colors duration-300 hover:bg-zinc-800/70 w-20 sm:w-24 lg:w-32"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-1 sm:mb-2 object-contain"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <span className="text-xs sm:text-sm font-medium text-center leading-tight">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

const TAB_DATA = [
  {
    id: "skills",
    title: "Skills",
    content: <SkillsCarousel />,
  },
  {
    id: "education",
    title: "Education",
    content: (
      <div className="space-y-4 sm:space-y-6">
        <div className="space-y-2 sm:space-y-3">
          <h3 className="text-base sm:text-lg font-semibold">
            Vocational Certificate{" "}
            <span className="font-normal text-sm sm:text-base">
              {" "}
              (Information Technology)
            </span>
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            Thai-Austrian Technical College | May 5, 2018 - March 15, 2021
          </p>
          <p className="text-sm sm:text-base text-gray-400">
            Information and Communication Technology
          </p>
          <p className="text-sm sm:text-base text-gray-400">GPA 2.31</p>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <h3 className="text-base sm:text-lg font-semibold">
            Bachelor of Science{" "}
            <span className="font-normal text-sm sm:text-base">
              (Information Technology and Digital Communication)
            </span>
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            Rajamangala University of Technology Thanyaburi | July 5, 2021 -
            March 31, 2025
          </p>
          <p className="text-sm sm:text-base text-gray-400">
            Faculty of Science and Technology
          </p>
          <p className="text-sm sm:text-base text-gray-400">GPA 2.39</p>
        </div>
      </div>
    ),
  },
  {
    id: "experience",
    title: "Experience",
    content: (
      <div className="space-y-4 sm:space-y-6">
        <div className="space-y-2 sm:space-y-3">
          <h3 className="text-base sm:text-lg font-semibold">
            IT-Support (Intern)
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            Thai-Austrian Technical College | Jul 2020 - October 2020
          </p>
          <div className="text-sm sm:text-base">
            <span className="font-medium">Responsibilities: </span>
            <span className="text-gray-300">
              Responsible for managing, troubleshooting, repairing, and
              maintaining computer equipment, including software and hardware of
              the organization to ensure they are in good condition and ready
              for use at all times.
            </span>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <h3 className="text-base sm:text-lg font-semibold">
            Developer (Intern)
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            Betask Consulting Co., Ltd. | Jul 2024 - October 2024
          </p>
          <div className="text-sm sm:text-base">
            <span className="font-medium">Responsibilities: </span>
            <span className="text-gray-300">
              Worked on developing web applications for both Client-side and
              Server-side.
            </span>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <h3 className="text-base sm:text-lg font-semibold">
            Software Engineer (Hybrid)
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            OneCharge Solution Co., Ltd. | June 2025 - Present
          </p>
          <div className="text-sm sm:text-base">
            <span className="font-medium">Responsibilities: </span>
            <span className="text-gray-300">
              Worked on developing web applications for both Client-side and
              Server-side.
            </span>
          </div>
        </div>
      </div>
    ),
  },
];

const images = [
  {
    src: "/images/AboutPic.jpeg",
    alt: "About me 1",
    priority: true,
  },
  {
    src: "/images/pic17.jpeg",
    alt: "About me 2",
  },
  {
    src: "/images/pic5.jpeg",
    alt: "About me 3",
  },
];

const AboutSection = () => {
  const locale = useLocale();
  const t = translations[locale] || translations.en;
  const [tab, setTab] = useState("skills");
  const [current, setCurrent] = useState(0);
  const [isPending, startTransition] = useTransition();
  const intervalRef = useRef();
  const [api, setApi] = useState();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    intervalRef.current = setInterval(() => {
      api.scrollNext();
    }, 3000); // Change slide every 3 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api]);

  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="text-white" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Image Section */}
          <motion.div
            className="w-full order-1 lg:order-1"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <Carousel
              setApi={setApi}
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto"
              opts={{
                loop: true,
              }}
            >
              <div className="p-2 sm:p-4 relative">
                <CarouselContent>
                  {images.map((img, idx) => (
                    <CarouselItem
                      key={img.src}
                      className="flex justify-center items-center"
                    >
                      <Image
                        src={img.src}
                        className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 object-cover w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px] bg-zinc-900"
                        width={500}
                        height={500}
                        alt={img.alt}
                        priority={img.priority}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute top-1/2 left-1 sm:left-2 -translate-y-1/2 z-10">
                  <CarouselPrevious className="bg-zinc-900/80 hover:bg-zinc-700/90 border-none shadow-md w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
                </div>
                <div className="absolute top-1/2 right-1 sm:right-2 -translate-y-1/2 z-10">
                  <CarouselNext className="bg-zinc-900/80 hover:bg-zinc-700/90 border-none shadow-md w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
                </div>
              </div>
            </Carousel>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="space-y-4 sm:space-y-6 order-2 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-2 sm:my-4">
                {t.aboutMe}
              </h2>
              <Separator className="bg-muted-foreground mx-auto lg:mx-0 w-16 sm:w-20" />
            </div>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base lg:text-lg leading-relaxed text-center lg:text-left px-2 sm:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {t.description}
            </motion.p>

            {/* Tab Navigation */}
            <motion.div
              className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {t.skills}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {t.education}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("experience")}
                active={tab === "experience"}
              >
                {t.experience}
              </TabButton>
            </motion.div>

            {/* Tab Content */}
            <motion.div
              className="bg-zinc-900/30 rounded-lg p-4 sm:p-6  mx-2 sm:mx-0"
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {tab === "skills" && <SkillsCarousel />}
              {tab === "education" && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-base sm:text-lg font-semibold">
                      {t.edu1.degree}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      {t.edu1.school}
                    </p>
                    <p className="text-sm sm:text-base text-gray-400">
                      {t.edu1.major}
                    </p>
                    <p className="text-sm sm:text-base text-gray-400">
                      {t.edu1.gpa}
                    </p>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-base sm:text-lg font-semibold">
                      {t.edu2.degree}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      {t.edu2.school}
                    </p>
                    <p className="text-sm sm:text-base text-gray-400">
                      {t.edu2.major}
                    </p>
                    <p className="text-sm sm:text-base text-gray-400">
                      {t.edu2.gpa}
                    </p>
                  </div>
                </div>
              )}
              {tab === "experience" && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-base sm:text-lg font-semibold">
                      {t.exp1.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      {t.exp1.company}
                    </p>
                    <div className="text-sm sm:text-base">
                      <span className="font-medium">{t.responsibilities}</span>
                      <span className="text-gray-300">{t.exp1.resp}</span>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-base sm:text-lg font-semibold">
                      {t.exp2.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      {t.exp2.company}
                    </p>
                    <div className="text-sm sm:text-base">
                      <span className="font-medium">{t.responsibilities}</span>
                      <span className="text-gray-300">{t.exp2.resp}</span>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-base sm:text-lg font-semibold">
                      {t.exp3.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      {t.exp3.company}
                    </p>
                    <div className="text-sm sm:text-base">
                      <span className="font-medium">{t.responsibilities}</span>
                      <span className="text-gray-300">{t.exp3.resp}</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
