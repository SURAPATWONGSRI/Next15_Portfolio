"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 list-disc list-inside">
        <li>HTML</li>
        <li>CSS</li>
        <li>Node.js</li>
        <li>Vue.js</li>
        <li>Javascript</li>
        <li>PHP</li>
        <li>Express.js</li>
        <li>PostgreSQL</li>
        <li>Python</li>
        <li>MySQL</li>
        <li>Next.js</li>
      </ul>
    ),
  },
  {
    id: "education",
    title: "Education",
    content: (
      <ul>
        <li className="text-lg font-semibold">
          ประกาศนียบัตรวิชาชีพ (สาขาเทคโนโลยีสารสนเทศและการสื่อสาร)
        </li>
        <li>วิทยาลัยเทคนิคสัตหีบ | 5 พฤกษภาคม 2561 - 15 มีนาคม 2564</li>
        <li>เทคโนโลยีสารสนเทศและการสื่อสาร</li>
        <li>GPA 2.31</li>

        <li className="text-lg mt-4 font-semibold">
          วิทยาศาสตร์บัณฑิต (สาขาเทคโนโลยีสารสนเทศและการสื่อสารดิจิทัล)
        </li>
        <li>มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี | 5 กรกฎาคม 2564 - ปัจจุบัน</li>
        <li>คณะวิทยาศาสตร์และเทคโนโลยี</li>
        <li>GPA 2.23</li>
      </ul>
    ),
  },
  {
    id: "experience",
    title: "Experience",
    content: (
      <ul>
        <li className="text-lg font-semibold">IT-Support (Intern)</li>
        <li>วิทยาลัยเทคนิคสัตหีบ | 07/2563 - 10/2563</li>

        <li className="text-md">
          หน้าที่ :{" "}
          <span>
            ดูแลรับผิดชอบ จัดการ แก้ไข ซ่อมแซม
            บำรุงรักษาเครื่องใช้อุปกรณ์คอมพิวเตอร์ ตลอดจน Software และ Hardware
            ขององค์กรให้อยู่ในสภาพที่ดี และพร้อมใช้งานอยู่ตลอดเวลา
          </span>
        </li>
        <li className="mt-4 text-lg font-semibold">Developer(Intern)</li>
        <li>บริษัท บีแทสก์ คอนซัลติ้ง จำกัด | 07/2567 - 10/2568</li>
        <li className="text-md">
          หน้าที่ :{" "}
          <span>
            ทำงานด้านการพัฒนาและเว็บแอพพลิเคชั่นทั้งฝั่ง Client และ Server
          </span>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

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
    <section className="text-white">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-center py-6 md:py-8 px-3 md:px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          className="w-full"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          <Image
            src="/images/AboutPic.jpeg"
            className="rounded-md w-full max-w-xs sm:max-w-sm md:max-w-none mx-auto object-cover aspect-square"
            width={500}
            height={500}
            alt="About me"
            priority
          />
        </motion.div>
        <div className="mt-4 md:mt-0">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-sm md:text-base lg:text-lg text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            ปัจจุบันเป็นนักศึกษาจาก มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี
            คณะวิทยาศาสตร์และเทคโนโลยี สาขาเทคโนโลยีคอมพิวเตอร์ ชั้นปีที่ 4
            มีประสบการณ์ในการทำระบบจองคิวในช่วงฝึกงาน โดยใช้เทคโนโลยี (Vue.js,
            Python, Node.js, MySQL, PHP, Next.js)
            ผมชอบศึกษาความรู้นอกห้องเรียนอยู่ตลอดเพื่อให้ตัวเองตามทันเทคโนโลยีปัจจุบัน
          </motion.p>
          <motion.div
            className="flex flex-row flex-wrap justify-center md:justify-start mt-6 md:mt-8 gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </motion.div>
          <motion.div
            className="mt-6 md:mt-8 text-sm md:text-base min-h-[200px] md:min-h-[250px] px-2 md:px-0"
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
