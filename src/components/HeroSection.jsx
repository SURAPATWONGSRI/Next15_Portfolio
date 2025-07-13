"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, MapPin } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const locale = useLocale();
  const translations = {
    en: {
      greeting: "Hello, I'm",
      title: "Surapat Wongsri",
      subtitle: "Full-Stack Developer",
      subtitle2: "Creative Problem Solver",
      location: "Bangkok, Thailand",
      hireMe: "Hire Me",
      downloadCV: "Download CV",
      terminalTitle: "WaKim.tsx",
      codeComment: {
        name: "Surapat Wongsri",
        role: "Full-Stack Developer",
        skills: ["React", "Node.js"],
        passion: "Building Amazing Apps",
      },
      commands: {
        console: "console.log(developer)",
        npmDev: "npm run dev",
        gitCommit: 'git commit -m "✨"',
        npmBuild: "npm run build",
        npmInstall: "npm i --save dev",
      },
    },
    th: {
      greeting: "สวัสดีครับ, ผม",
      title: "สุรพัศ วงศรี",
      subtitle: "Full-Stack Developer",
      subtitle2: "Software Engineer",
      location: "กรุงเทพมหานคร, ประเทศไทย",
      hireMe: "จ้างงาน",
      downloadCV: "ดาวน์โหลด CV",
      terminalTitle: "WaKim.tsx",
      codeComment: {
        name: "Surapat Wongsri",
        role: "Full-Stack Developer",
        skills: ["React", "Node.js"],
        passion: "Building Amazing Apps",
      },
      commands: {
        console: "console.log(developer)",
        npmDev: "npm run dev",
        gitCommit: 'git commit -m "✨"',
        npmBuild: "npm run build",
        npmInstall: "npm i --save dev",
      },
    },
  };

  const currentTranslations = translations[locale] || translations.en;

  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    // Add CV download logic here
    console.log("Download CV clicked");
  };

  // ==================== Component Render ====================
  return (
    <section className="py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* ========== CONTENT SECTION ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 lg:col-span-7 text-center lg:text-left"
        >
          {/* Greeting Header */}
          <motion.h1
            className="text-white mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center lg:justify-start ">
              {currentTranslations.greeting}
              {"  "}
              <Image
                src="/images/hi-emoji.png"
                alt="Hi emoji"
                width={40}
                height={40}
                className="inline-block "
              />
            </span>

            {/* Animated Name/Title */}
            <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl h-[3rem] sm:h-[4rem] lg:h-[5rem] flex items-center justify-center lg:justify-start mt-2">
              <TypeAnimation
                sequence={[
                  currentTranslations.title,
                  1000,
                  currentTranslations.subtitle,
                  1000,
                  currentTranslations.subtitle2,
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  display: "inline-block",
                  width: "100%",
                  textAlign: "inherit",
                }}
                repeat={Infinity}
              />
            </div>
          </motion.h1>

          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <Badge
              variant="secondary"
              className="bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 px-3 py-1 text-sm"
            >
              <MapPin className="w-3 h-3 mr-1" />
              {currentTranslations.location}
            </Badge>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            {/* Hire Me Button */}
            <Button
              onClick={handleContactClick}
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              {currentTranslations.hireMe}
            </Button>

            {/* Download CV Button */}
            <Button
              onClick={handleDownloadCV}
              variant="outline"
              size="lg"
              className="text-card-foreground  hover:bg-emerald-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Download className="w-4 h-4 mr-2" />
              {currentTranslations.downloadCV}
            </Button>
          </motion.div>
        </motion.div>

        {/* ========== IMAGE SECTION ========== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-1 lg:col-span-5 flex justify-center"
        >
          <div className="relative">
            {/* Main Profile Container with Terminal-like Border */}
            <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] relative">
              {/* Terminal Window Frame */}
              <div className="absolute inset-0 bg-zinc-900/90 backdrop-blur-sm border border-zinc-700/50 rounded-2xl shadow-2xl shadow-cyan-500/10">
                {/* Terminal Header */}
                <div className="flex items-center justify-between p-4 border-b border-zinc-700/50">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-zinc-400 text-xs font-mono">
                    {currentTranslations.terminalTitle}
                  </span>
                  <div className="w-4 h-4"></div>
                </div>

                {/* Code Editor Background */}
                <div className="p-4 h-full relative overflow-hidden">
                  {/* Fake Code Lines */}
                  <div className="absolute top-4 left-4 right-4 space-y-2 font-mono text-xs opacity-30">
                    <div className="text-purple-400">
                      const developer = {"{"}
                    </div>
                    <div className="text-blue-400 ml-4">
                      name: "{currentTranslations.codeComment.name}",
                    </div>
                    <div className="text-green-400 ml-4">
                      role: "{currentTranslations.codeComment.role}",
                    </div>
                    <div className="text-yellow-400 ml-4">
                      skills:{" "}
                      {JSON.stringify(currentTranslations.codeComment.skills)},
                    </div>
                    <div className="text-red-400 ml-4">
                      passion: "{currentTranslations.codeComment.passion}"
                    </div>
                    <div className="text-purple-400">{"};"}</div>
                  </div>

                  {/* Profile Image Container */}
                  <div className="absolute inset-8 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center backdrop-blur-sm border border-emerald-500/30">
                    {/* Glitch Effect Border */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 opacity-50 animate-pulse"></div>
                    <div className="absolute inset-0.5 rounded-xl bg-zinc-900/80 backdrop-blur-sm"></div>

                    {/* Main Avatar */}
                    <Avatar className="w-full h-full relative z-10 rounded-xl">
                      <AvatarImage
                        src="/images/HeroProfile.png"
                        alt="Professional image of Surapat Wongsri"
                        className="object-cover rounded-xl"
                      />
                      <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-cyan-500 text-white text-4xl font-bold rounded-xl">
                        SW
                      </AvatarFallback>
                    </Avatar>

                    {/* Scanning Line Effect */}
                    <motion.div
                      initial={{ y: "-100%" }}
                      animate={{ y: "300%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 3,
                      }}
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent h-8 z-20"
                    ></motion.div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="absolute -top-8 -left-8 w-16 h-16 bg-zinc-800/90 backdrop-blur-sm border border-orange-500/30 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20"
              >
                <span className="text-orange-500 text-xl font-bold">
                  {"</>"}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.7 }}
                className="absolute -top-4 -right-12 w-14 h-14 bg-zinc-800/90 backdrop-blur-sm border border-blue-500/30 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20"
              >
                <div className="text-blue-500 text-sm font-mono">
                  <Image
                    src={"/images/memoji.png"}
                    width={50}
                    height={50}
                    alt="alt img"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.9 }}
                className="absolute -bottom-6 -left-10 w-50 h-8 bg-zinc-800/90 backdrop-blur-sm border border-green-500/30 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/20"
              >
                <span className="text-green-500 text-xs font-mono">
                  {currentTranslations.commands.console}
                </span>
              </motion.div>

              {/* Terminal Command Badges */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 2.2 }}
                className="absolute top-12 -left-20 bg-zinc-900/95 backdrop-blur-sm border border-emerald-500/30 rounded-lg px-3 py-2 shadow-lg shadow-emerald-500/10"
              >
                <div className="text-emerald-400 text-xs font-mono flex items-center">
                  <span className="text-zinc-500 mr-2">$</span>
                  {currentTranslations.commands.npmDev}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 2.4 }}
                className="absolute bottom-20 -right-24 bg-zinc-900/95 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-3 py-2 shadow-lg shadow-cyan-500/10"
              >
                <div className="text-cyan-400 text-xs font-mono flex items-center">
                  <span className="text-zinc-500 mr-2">{">"}</span>
                  {currentTranslations.commands.gitCommit}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.6 }}
                className="absolute top-1/3 -left-24 bg-zinc-900/95 backdrop-blur-sm border border-purple-500/30 rounded-lg px-3 py-2 shadow-lg shadow-purple-500/10"
              >
                <div className="text-purple-400 text-xs font-mono">
                  {currentTranslations.commands.npmBuild}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.8 }}
                className="absolute bottom-1/3 -right-20 bg-zinc-900/95 backdrop-blur-sm border border-yellow-500/30 rounded-lg px-3 py-2 shadow-lg shadow-yellow-500/10"
              >
                <div className="text-yellow-400 text-xs font-mono">
                  {currentTranslations.commands.npmInstall}
                </div>
              </motion.div>

              {/* Status Indicators */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2.0 }}
                className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-500 w-4 h-4 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50"
              >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </motion.div>

              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      y: [-20, -60, -100],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeOut",
                    }}
                    className={`absolute w-1 h-1 bg-cyan-400 rounded-full`}
                    style={{
                      left: `${20 + i * 15}%`,
                      bottom: "10%",
                    }}
                  />
                ))}
              </div>

              {/* Circuit Pattern Background */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 400 400"
                  className="absolute inset-0"
                >
                  <defs>
                    <pattern
                      id="circuit"
                      x="0"
                      y="0"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M0 20 L20 20 L20 0 M20 20 L40 20 M20 20 L20 40"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                        className="text-cyan-400/30"
                      />
                      <circle
                        cx="20"
                        cy="20"
                        r="2"
                        fill="currentColor"
                        className="text-emerald-400/40"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#circuit)" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
